package com.main.hotelfinder.controllers;

import com.main.hotelfinder.entities.Booking;
import com.main.hotelfinder.services.BookingService;
import com.main.hotelfinder.services.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class BookingController {
    private final BookingService bookingService;



    //TODO will implement a better booking system, that will select time
    @PostMapping("/booking")
    public ResponseEntity<?> addBooking(@RequestBody Booking booking) {
        try{
            bookingService.addBooking(booking);
            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body("Could not get bookings");
        }

    }

    @DeleteMapping("/booking/delete/{bookingID}")
    public ResponseEntity<?> deleteBooking(@PathVariable int bookingID) {
        try{
            bookingService.deleteBooking(bookingID);
            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body("Could not get bookings");
        }

    }

}