import "./hotelcard.scss";
import { Link } from "react-router-dom";
import React from 'react';
import { HiPlus } from "react-icons/hi";

const HotelCard = ({ id, title, description, image, minPrice, maxPrice, city, country, amenities }) => {
    return (
        <Link className="hotelCard col-lg-4 col-md-6 col-12 p-0 mt-4" to={`/hotels/${id}`}>
            <div className="hotelCardImage">
                <img
                    src={image} alt={title}
                />
            </div>
            <div className="hotelCardBody">
                <h5 className="mb-0">{title}</h5>
                <p className="hotelCardDescription mb-0">{description}</p>
                <p className="mb-0">
                    <span>Price:</span> {minPrice}$ - {maxPrice}$ /NIGHT
                </p>
                <p className="mb-0">
                    <span>Location:</span> {city}, {country}
                </p>
                <div className="hotelCardAmenities">
                    {amenities && amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="hotelCardAmenityItem">
                            {amenity}
                        </span>
                    ))}
                    {amenities && amenities.length > 3 && (
                        <span className="hotelCardAmenityMore"><HiPlus /></span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default HotelCard;