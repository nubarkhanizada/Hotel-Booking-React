import "./herosectiondetails.scss";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import services from "../../../api/api";
import { SlArrowRight } from "react-icons/sl";
import BookingForm from "../../Forms/BookingForm/BookingForm";

const HeroSectionDetails = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const getHotel = () => {
            services.hotelAPI.getHotelById(id, (data) => {
                if (data) {
                    setHotel(data);
                } else {
                    setHotel(null);
                }
            });
        };


        if (id) {
            getHotel();
        }
    }, [id]);

    return (
        <section className="heroSectionDetails" style={{ backgroundImage: `url(${hotel?.image || "https://landing.engotheme.com/html/lotus/demo/images/banner/img-10.jpg"})` }}>
            <div className="heroSectionDetailsAll">
                <h4 className="mb-0">{hotel && `Welcome To ${hotel.title}`}</h4>
                <h6 className="mb-0">{hotel && hotel.description}</h6>
                <div className="text-center mt-5" onClick={() => setIsModalOpen(true)}>
                    <Link className="button heroSectionButton" >BOOK NOW<SlArrowRight /></Link>
                </div>
            </div>
            <div className="overlay"></div>
            <BookingForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default HeroSectionDetails