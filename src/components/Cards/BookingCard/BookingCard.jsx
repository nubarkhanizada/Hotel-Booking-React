import "./bookingcard.scss";
import React from "react";

const BookingCard = ({ checkInDate, checkOutDate, numberOfNights, roomType, guests, airportTransfer, totalPrice, hotelName }) => {

    return (
        <div className="bookingCard col-lg-4 col-md-6 col-12 p-0 mt-4">
            <h3 className="mb-0">{hotelName}</h3>
            <div className="bookingDetails">
                <p className="mb-0"><span>Check-in:</span> {checkInDate}</p>
                <p className="mb-0"><span>Check-out:</span> {checkOutDate}</p>
                <p className="mb-0"><span>Number of Nights:</span> {numberOfNights}</p>
                <p className="mb-0"><span>Room Type:</span> {roomType}</p>
                <p className="mb-0"><span>Guests:</span> {guests}</p>
                <p className="mb-0"><span>Airport Transfer:</span> {airportTransfer ? "Included" : "Not Included"}</p>
                <p className="mb-0"><span>Total Price:</span> ${totalPrice}</p>
            </div>
        </div>
    );
};

export default BookingCard;
