import "./hotelsection.scss";
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import services from "../../api/api";
import HotelCardMinimalist from "../Cards/HotelCardMinimalist/HotelCardMinimalist";

const HotelSection = () => {
    const [hotels, setHotels] = useState();

    useEffect(() => {
        services.hotelAPI.getTwoHotels(setHotels);
    }, []);

    return (
        <section className="hotelSection">
            <div className="containerDefault">
                <div className="hotelSectionAll row d-lg-flex d-md-block d-sm-block justify-content-lg-between align-items-lg-center">
                    <div className="hotelSectionLeft col-lg-4 col-12">
                        <h4 className="mb-3 text-lg-start text-center">MOST POPULAR HOTELS</h4>
                        <h6 className="mb-0 text-lg-start text-center">Explore top hotels for Muslim travellers, offering halal-friendly amenities, women-only spaces, and serene getaways that align with your values.</h6>
                        <div className="text-lg-start text-center mt-5 mb-lg-0 mb-md-5 mb-sm-5 ">
                            <Link className="button hotelSectionButton" to={'/hotels'}>VIEW ALL HOTELS <SlArrowRight /></Link>
                        </div>
                    </div>
                    <div className="hotelSectionRight col-lg-8 col-12 d-lg-flex d-md-block d-sm-block justify-content-between">
                        {hotels && hotels.map((hotel) => (
                            <HotelCardMinimalist key={hotel.id}
                                id={hotel.id}
                                title={hotel.title}
                                image={hotel.image}
                                minPrice={hotel.minPrice}
                                city={hotel.city}
                                country={hotel.country}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    )
}

export default HotelSection