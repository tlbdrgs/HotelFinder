package com.main.hotelfinder.services;

import com.main.hotelfinder.entities.Booking;
import com.main.hotelfinder.entities.Review;
import com.main.hotelfinder.repositories.BookingRepository;
import com.main.hotelfinder.repositories.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final BookingRepository bookingRepository;

    public List<Booking> getAllBookings()
    {
        return bookingRepository.findAll();
    }

    public void addBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    public void deleteBooking(int bookingID) {
        bookingRepository.deleteById(bookingID);
    }
}
