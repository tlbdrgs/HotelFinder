package com.main.hotelfinder.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.main.hotelfinder.entities.Review;
import com.main.hotelfinder.repositories.ReviewRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    @PostConstruct
    public void initialization() throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        ClassPathResource resource = new ClassPathResource("data/reviews.json");
        try (InputStream inputStream = resource.getInputStream()) {
            List<Review> reviews = mapper.readValue(inputStream, new TypeReference<>() {});
            reviewRepository.saveAll(reviews);
        }
    }

    public List<Review> getAllReviews()
    {
        return reviewRepository.findAll();
    }

    public void addReview(Review review) {
        reviewRepository.save(review);
    }
}
