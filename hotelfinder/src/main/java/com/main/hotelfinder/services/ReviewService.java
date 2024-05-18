package com.main.hotelfinder.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.main.hotelfinder.entities.Hotel;
import com.main.hotelfinder.entities.Review;
import com.main.hotelfinder.entities.Room;
import com.main.hotelfinder.repositories.ReviewRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    @PostConstruct
    public void initialization() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File jsonFile = new File("src/main/resources/data/reviews.json").getAbsoluteFile();
        List<Review> reviews = mapper.readValue(jsonFile, new TypeReference<List<Review>>() {});
        reviewRepository.saveAll(reviews);
    }

    public List<Review> getAllReviews()
    {
        return reviewRepository.findAll();
    }

    public void addReview(Review review) {
        reviewRepository.save(review);
    }
}
