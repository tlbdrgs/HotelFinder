package com.main.hotelfinder.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.main.hotelfinder.entities.Hotel;
import com.main.hotelfinder.entities.Room;
import com.main.hotelfinder.repositories.HotelRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HotelService {
    private final HotelRepository hotelRepository;

    @PostConstruct
    public void initialization() throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        ClassPathResource resource = new ClassPathResource("data/hotels.json");
        try (InputStream inputStream = resource.getInputStream()) {
            List<Hotel> hotels = mapper.readValue(inputStream, new TypeReference<>() {});

            for (Hotel hotel : hotels) {
                for (Room room : hotel.getRooms()) {
                    room.setHotel(hotel);
                }
            }

            hotelRepository.saveAll(hotels);
        }
    }

    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    public List<Hotel> getNearbyHotels(double latitude, double longitude, float radius)
    {
        return hotelRepository.findHotelsWithinRadius(latitude, longitude, radius);
    }

}
