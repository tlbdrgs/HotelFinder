package com.main.hotelfinder.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.main.hotelfinder.entities.Hotel;
import com.main.hotelfinder.entities.Room;
import com.main.hotelfinder.repositories.HotelRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HotelService {
    private final HotelRepository hotelRepository;

    @PostConstruct
    public void initialization() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File jsonFile = new File("src/main/resources/data/hotels.json").getAbsoluteFile();
        List<Hotel> hotels = mapper.readValue(jsonFile, new TypeReference<List<Hotel>>() {});

        for (Hotel hotel : hotels) {
            for (Room room : hotel.getRooms()) {
                room.setHotel(hotel);
            }
        }

        hotelRepository.saveAll(hotels);
    }

    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    public List<Hotel> getNearbyHotels(double latitude, double longitude, float radius)
    {
        return hotelRepository.findHotelsWithinRadius(latitude, longitude, radius);
    }

}
