import "./hotellistsection.scss";
import services from "../../api/api";
import React, { useEffect, useState } from 'react'
import HotelCard from "../Cards/HotelCard/HotelCard";

const HotelListSection = () => {
    const [hotels, setHotels] = useState();

    useEffect(() => {
        services.hotelAPI.getAllHotels(setHotels);
    }, []);
    return (
        <section className="hotelListSection">
            <div className="containerDefault">
                <div className="hotelListSectionAll row d-lg-flex d-md-flex d-block justify-content-between m-0">
                    {hotels && hotels.map((hotel) => (
                        <HotelCard key={hotel.id}
                            id={hotel.id}
                            title={hotel.title}
                            description={hotel.description}
                            image={hotel.image}
                            images={hotel.images}
                            minPrice={hotel.minPrice}
                            maxPrice={hotel.maxPrice}
                            city={hotel.city}
                            country={hotel.country}
                            amenities={hotel.amenities}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HotelListSection