import "./hotelcardminimalist.scss";
import { Link } from "react-router-dom";
import React from 'react';

const HotelCard = ({ id, title, image, minPrice, city, country }) => {
    return (
        <Link className="hotelCardMinimalist col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-md-4 mb-sm-4" to={`/hotels/${id}`}>
            <div className="hotelCardMinimalistImage">
                <img src={image} alt={title} />
            </div>
            <div className="hotelCardMinimalistBody">
                <h5 className="mb-0">{title}</h5>
                <p className="mb-0">
                    <span>Minimum Price:</span> {minPrice}$ /NIGHT
                </p>
                <p className="mb-0">
                    <span>Location:</span> {city}, {country}
                </p>
            </div>
        </Link>
    );
};

export default HotelCard;
