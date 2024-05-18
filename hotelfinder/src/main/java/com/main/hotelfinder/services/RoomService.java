package com.main.hotelfinder.services;


import com.main.hotelfinder.entities.Room;
import com.main.hotelfinder.repositories.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {
    private final RoomRepository roomRepository;

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public List<Room> getRoomsByHotelId(long hotelId) {
        return roomRepository.findByHotelId(hotelId);
    }

    public void markBooking(Room room) {
        room.setAvailable(!room.isAvailable());
        roomRepository.save(room);
    }

    public Room getRoomByNumber(int roomNumber) {
        return roomRepository.findByRoomNumber(roomNumber);
    }
}
