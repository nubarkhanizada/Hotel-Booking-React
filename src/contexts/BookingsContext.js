import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings"))
  );

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (data) => {
    setBookings([...bookings, data]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
