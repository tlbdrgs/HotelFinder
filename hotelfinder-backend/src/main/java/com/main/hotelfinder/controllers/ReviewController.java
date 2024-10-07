package com.main.hotelfinder.controllers;

import com.main.hotelfinder.entities.Booking;
import com.main.hotelfinder.entities.Review;
import com.main.hotelfinder.services.HotelService;
import com.main.hotelfinder.services.ReviewService;
import com.main.hotelfinder.services.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping("/reviews")
    public ResponseEntity<?> getReviews() {
        try{
            return ResponseEntity.ok().body(reviewService.getAllReviews());
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body("Could not get reviews");
        }
    }

    @PostMapping("/reviews/publish")
    public ResponseEntity<?> addReview(@RequestBody Review review) {
        try{
            reviewService.addReview(review);
            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().body("Could not save review");
        }

    }
}