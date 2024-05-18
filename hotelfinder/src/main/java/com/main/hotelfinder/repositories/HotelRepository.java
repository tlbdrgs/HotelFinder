package com.main.hotelfinder.repositories;

import com.main.hotelfinder.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    @Query("select h from Hotel h where h.name = :name")
    public Hotel getHotelByName(String name);

    @Query(value = "SELECT h FROM Hotel h WHERE " +
            "(6371 * acos(cos(radians(:latitude)) * cos(radians(h.latitude)) * cos(radians(h.longitude) - radians(:longitude)) + sin(radians(:latitude)) * sin(radians(h.latitude)))) < :radius")
    List<Hotel> findHotelsWithinRadius(@Param("latitude") double latitude,
                                       @Param("longitude") double longitude,
                                       @Param("radius") double radius);
}