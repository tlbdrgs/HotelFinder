package com.main.hotelfinder.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Column(name = "booking_start_date", nullable = false)
    private LocalDateTime bookingStartDate;

    @Column(name = "booking_end_date", nullable = false)
    private LocalDateTime bookingEndDate;

    @Column(name = "status", length = 50)
    private String status;
}
