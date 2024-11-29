import { useParams } from "react-router-dom";
import "./roomsection.scss";
import React, { useEffect, useState } from 'react'
import services from "../../api/api";

const RoomSection = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState();

    useEffect(() => {
        services.hotelAPI.getHotelById(id, setHotel);
    }, [id]);
    return (
        <section className="roomSection">
            <div className="containerDefault">
                <div className="roomSectionAll">
                    <h4 className="m-0">ROOMS & SUITES</h4>
                    <h6 className="m-0">Experience Comfort and Elegance in Every Stay</h6>
                    {hotel ? (
                        <div className="roomContainer row d-lg-flex d-md-flex d-sm-block justify-content-evenly">
                            {hotel && hotel.rooms.map((room) => (
                                <div className="roomBody col-lg-4 col-md-6 col-12 mt-4" key={room.id}>
                                    <div className="roomImage">
                                        <img src={room.image} alt={room.name} />
                                    </div>
                                    <div className="roomDetails">
                                        <h5 className="mb-0">{room.name}</h5>
                                        <p className="mb-0">{room.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default RoomSection