import "./bookinglistsection.scss";
import BookingCard from "../Cards/BookingCard/BookingCard";
import React, { useContext } from "react";
import { BookingContext } from "../../contexts/BookingsContext";

const BookingListSection = () => {
    const { bookings } = useContext(BookingContext);

    return (
        <div className="bookingListSection">
            <div className="containerDefault">
                <div className="bookingListSectionAll row d-lg-flex d-md-flex d-block justify-content-between m-0">
                    {bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                            <BookingCard key={index}
                                checkInDate={booking.checkInDate}
                                checkOutDate={booking.checkOutDate}
                                numberOfNights={booking.numberOfNights}
                                roomType={booking.roomType}
                                guests={booking.guests}
                                airportTransfer={booking.airportTransfer}
                                totalPrice={booking.totalPrice}
                                hotelName={booking.hotelName} />
                        ))
                    ) : (
                        <p>No bookings available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingListSection;
