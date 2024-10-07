CREATE TABLE IF NOT EXISTS "hotel"
(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION
);

CREATE TABLE IF NOT EXISTS "room"
(
    "id" SERIAL PRIMARY KEY,
    "room_number" INT,
    "type" INT,
    "price" DOUBLE PRECISION,
    "is_available" Boolean,
    "hotel_id" INT NOT NULL,
    FOREIGN KEY ("hotel_id") REFERENCES hotel(id)
);

CREATE TABLE IF NOT EXISTS "review"
(
    "id" SERIAL PRIMARY KEY,
    "message" VARCHAR(1024),
    "hotel_id" INT,
    FOREIGN KEY ("hotel_id") REFERENCES hotel(id)
);

CREATE TABLE IF NOT EXISTS "booking"
(
    "id" SERIAL PRIMARY KEY,
    "room_id" INT,
    "booking_start_date" TIMESTAMP,
    "booking_end_date" TIMESTAMP,
    FOREIGN KEY("room_id") REFERENCES room(id)
);