import "./bookingform.scss";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import services from "../../../api/api";
import { BookingContext } from "../../../contexts/BookingsContext";
import toast from "react-hot-toast";
Modal.setAppElement("#root");

const BookingForm = ({ isOpen, onClose }) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const { addBooking } = useContext(BookingContext);
    const [hotel, setHotel] = useState(null);
    const [selectedRoomPrice, setSelectedRoomPrice] = useState();
    const airportTransferPrice = 100;
    const navigate = useNavigate();

    // watch
    const selectedRoomId = watch("roomType");
    const includeTransfer = watch("airportTransfer");

    // selected room price
    useEffect(() => {
        if (hotel && selectedRoomId) {
            const selectedRoom = hotel.rooms.find((room) => room.id === selectedRoomId);
            setSelectedRoomPrice(selectedRoom ? parseFloat(selectedRoom.price) : 0);
        } else {
            setSelectedRoomPrice(0);
        }
    }, [selectedRoomId, hotel]);

    useEffect(() => {
        if (id) {
            services.hotelAPI.getHotelById(id, (data) => {
                setHotel(data);
                reset({
                    hotelName: data?.title || "",
                });
            });
        }
    }, [id, reset]);

    const onSubmit = (data) => {
        const selectedRoom = hotel.rooms.find((room) => room.id === data.roomType);

        // numbers of nights
        const checkInDate = new Date(data.checkInDate);
        const checkOutDate = new Date(data.checkOutDate);
        const timeDifference = checkOutDate - checkInDate; // milliseconds
        const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // days

        if (numberOfNights <= 0) {
            toast.error("Check-out date must be later than check-in date.");
            return;
        }

        // total price
        const roomPricePerNight = selectedRoom ? parseFloat(selectedRoom.price) : 0;
        const totalPrice =
            roomPricePerNight * numberOfNights +
            (includeTransfer ? airportTransferPrice : 0);

        // data
        const bookingData = {
            ...data,
            roomType: selectedRoom ? selectedRoom.name : "Unknown Room",
            roomPrice: roomPricePerNight,
            numberOfNights,
            totalPrice,
            hotelName: hotel.title,
            id: Date.now(), // unique id for booking
        };
        addBooking(bookingData);
        reset();
        onClose();
        navigate('/bookings');
    };

    // calculate total nights
    const calculateNumberOfNights = () => {
        const checkInDate = new Date(watch("checkInDate"));
        const checkOutDate = new Date(watch("checkOutDate"));
        const timeDifference = checkOutDate - checkInDate;
        const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return numberOfNights > 0 ? numberOfNights : 0;
    };


    // calculate total price
    const calculateTotalPrice = () => {
        const numberOfNights = calculateNumberOfNights();
        return selectedRoomPrice * numberOfNights + (includeTransfer ? airportTransferPrice : 0);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modalContent"
            overlayClassName="modalOverlay"
            contentLabel="Edit Product"
        >
            <h4 className="m-0">{hotel?.title}</h4>
            <form className="modalForm" onSubmit={handleSubmit(onSubmit)}>
                {/* Date */}
                <div className="formGroup">
                    <label>Check-in Date:</label>
                    <input
                        type="date"
                        {...register("checkInDate", { required: "Check-in date is required" })}
                    />
                    {errors.checkInDate && <p className="error">{errors.checkInDate.message}</p>}
                </div>
                <div className="formGroup">
                    <label>Check-out Date:</label>
                    <input
                        type="date"
                        {...register("checkOutDate", { required: "Check-out date is required" })}
                    />
                    {errors.checkOutDate && <p className="error">{errors.checkOutDate.message}</p>}
                </div>
                {/* Room Types */}
                <div className="formGroup">
                    <label>Room Type:</label>
                    <select
                        {...register("roomType", { required: "Please select a room type" })}
                    >
                        <option value="">Select a Room</option>
                        {hotel &&
                            hotel.rooms.map((room) => (
                                <option key={room.id} value={room.id}>
                                    {room.name} ({room.price}$)
                                </option>
                            ))}
                    </select>
                    {errors.roomType && <p className="error">{errors.roomType.message}</p>}
                </div>
                {/* Amenities */}
                <div className="formGroup">
                    <label>Amenities:</label>
                    {hotel &&
                        hotel.amenities.map((amenity, index) => (
                            <div key={index}>
                                <input className="checkboxInput w-25"
                                    type="checkbox"
                                    value={amenity}
                                    {...register("amenities")}
                                />
                                {amenity}
                            </div>
                        ))}
                </div>
                {/* People */}
                <div className="formGroup">
                    <label>Guests:</label>
                    <input
                        type="number"
                        {...register("guests", {
                            required: "Please specify the number of guests",
                            min: { value: 1, message: "At least one guest is required" },
                            max: { value: 5, message: "Maximum 5 guests allowed" },
                        })}
                        placeholder="Number of guests"
                    />
                    {errors.guests && <p className="error">{errors.guests.message}</p>}
                </div>
                {/* Airport Transfer */}
                <div className="formGroup">
                    <label >
                        <input className="checkboxInput w-25" type="checkbox" {...register("airportTransfer")} />
                        Include Airport Transfer ({airportTransferPrice}$)
                    </label>
                </div>
                {/* Total Price & Nights */}
                <div className="formGroup">
                    <p>Number of Nights: {calculateNumberOfNights()}</p>
                    <p>Total Price: {calculateTotalPrice()}$</p>
                </div>

                <button className="button submitButton" type="submit">BOOK</button>
                <button className="closeButton" onClick={onClose}>X</button>
            </form>
        </Modal>
    );
};

export default BookingForm;
