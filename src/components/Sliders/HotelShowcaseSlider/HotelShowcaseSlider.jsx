import "./hotelshowcaseslider.scss";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import services from "../../../api/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotelShowcaseSlider = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState();

    useEffect(() => {
        services.hotelAPI.getHotelById(id, setHotel);
    }, [id]);

    // image modal
    const openModal = (image) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // slider function
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="hotelShowcaseSection">
            <div className="hotelShowcaseSectionAll">
                <h4 className="m-0">HOTEL SHOWCASE</h4>
                <h6 className="m-0">Discover the Beauty of Our Hotel at a Glance</h6>
                {hotel ? (
                    <div className="sliderContainer">
                        <Slider {...settings}>
                            {hotel && hotel.images.map((image, index) => (
                                <div key={index} className="sliderImage">
                                    <img src={image} alt={`Hotel ${hotel.title} - ${index + 1}`} onClick={() => openModal(image)} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                {isModalOpen && (
                    <div className="modalOverlay" onClick={closeModal}>
                        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage} alt="Enlarged" />
                            <button className="closeButton" onClick={closeModal}>X</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HotelShowcaseSlider