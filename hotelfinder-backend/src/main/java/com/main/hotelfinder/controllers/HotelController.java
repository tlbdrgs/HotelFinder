package com.main.hotelfinder.controllers;

import com.main.hotelfinder.services.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class HotelController {
    private final HotelService hotelService;

    @GetMapping("/hotels")
    public ResponseEntity<?> getHotels() {
        try{
            return ResponseEntity.ok().body(hotelService.getAllHotels());
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body("Could not get hotels");
        }
    }

    @GetMapping("/hotels/nearby")
    public ResponseEntity<?> getNearbyHotels(@RequestParam double longitude, @RequestParam double latitude, @RequestParam float radius) {
        try{
            return ResponseEntity.ok().body(hotelService.getNearbyHotels(latitude, longitude,radius));
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body("Could not get hotels");
        }
    }
}