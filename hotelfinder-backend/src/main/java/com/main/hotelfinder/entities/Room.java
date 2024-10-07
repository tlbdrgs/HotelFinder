package com.main.hotelfinder.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.main.hotelfinder.utils.enums.RoomType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.chrono.ChronoLocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Room")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    @Column(name = "room_number", nullable = false)
    private String roomNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private RoomType type;

    private int price;

    @ManyToOne
    @JoinColumn(name = "hotel_id", nullable = false)
    @JsonBackReference
    private Hotel hotel;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Booking> bookings;

    @Transient
    @JsonProperty("isAvailable")
    public boolean isAvailable() {
        return bookings.stream()
                .noneMatch(booking -> booking.getStatus().equals("confirmed") &&
                        LocalDate.now().isBefore(ChronoLocalDate.from(booking.getBookingEndDate())) &&
                        LocalDate.now().isAfter(ChronoLocalDate.from(booking.getBookingStartDate())));
    }
}