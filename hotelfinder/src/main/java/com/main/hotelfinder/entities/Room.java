package com.main.hotelfinder.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private int id;
    @Column(name="room_number")
    private long roomNumber;
    private int type;
    private int price;
    @JsonProperty("isAvailable")
    private boolean isAvailable;
    @ManyToOne()
    @JoinColumn(name = "hotel_id")
    @JsonBackReference
    private Hotel hotel;
}
