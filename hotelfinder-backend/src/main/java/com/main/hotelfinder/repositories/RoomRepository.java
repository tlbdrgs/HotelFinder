package com.main.hotelfinder.repositories;

import com.main.hotelfinder.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    List<Room> findByHotelId(long hotelId);

    Room findByRoomNumber(String roomNumber);
}