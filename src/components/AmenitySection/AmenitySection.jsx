import "./amenitysection.scss";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import services from "../../api/api";

const HotelAmenitiesSection = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState();

    useEffect(() => {
        services.hotelAPI.getHotelById(id, setHotel);
    }, [id]);
    return (
        <section className="hotelAmenitiesSection">
            <div className="containerDefault">
                <div className="hotelAmenitiesSectionAll">
                    <h4 className="m-0">HOTEL AMENITIES</h4>
                    <h6 className="m-0">Experience Comfort and Elegance in Every Stay</h6>
                    {hotel ? (
                        <div className="amenityContainer row d-lg-flex d-md-flex d-sm-block justify-content-evenly">
                            {hotel && hotel.amenities.map((amenity, index) => (
                                <div className="amenityBody col-lg-4 col-md-6 col-12 mt-4" key={index}>
                                    <div className="amenityDetails">
                                        <h5 className="mb-0">{amenity}</h5>
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

export default HotelAmenitiesSection