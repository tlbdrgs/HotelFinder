-- Create the "hotel" table if it doesn't exist
CREATE TABLE IF NOT EXISTS "hotel"
(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION
);

-- Create the "room" table with the "type" column as VARCHAR for RoomType enum
CREATE TABLE IF NOT EXISTS "room"
(
    "id" SERIAL PRIMARY KEY,
    "room_number" VARCHAR(1024),
    "type" VARCHAR(255),
    "price" DOUBLE PRECISION,
    "is_available" BOOLEAN,
    "hotel_id" INT NOT NULL,
    FOREIGN KEY ("hotel_id") REFERENCES hotel(id)
    );

-- Create the "review" table
CREATE TABLE IF NOT EXISTS "review"
(
    "id" SERIAL PRIMARY KEY,
    "message" VARCHAR(1024),
    "hotel_id" INT,
    FOREIGN KEY ("hotel_id") REFERENCES hotel(id)
    );

-- Create the "booking" table if it doesn't exist with updated field names
CREATE TABLE IF NOT EXISTS "booking"
(
    "id" SERIAL PRIMARY KEY,
    "room_id" INT,
    "booking_start_date" TIMESTAMP,  -- Matches the entity field 'bookingStartDate'
    "booking_end_date" TIMESTAMP,    -- Matches the entity field 'bookingEndDate'
    "status" VARCHAR(50),            -- To store the status of the booking
    FOREIGN KEY("room_id") REFERENCES room(id)
    );