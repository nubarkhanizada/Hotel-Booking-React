import "./destinationsection.scss";
import React from 'react'
import DestinationImage from '../DestinationImage/DestinationImage'

const HeroSection = () => {
    return (
        <section className="destinationSection">
            <div className="containerDefault">
                <div className="destinationSectionAll">
                    <div className="destinationSectionTitle row">
                        <h4 className="mb-0 col-lg-7 col-12 text-lg-start text-center">POPULAR DESTINATIONS</h4>
                        <h6 className="mb-0 col-lg-4 col-12 text-lg-end text-center">Explore top destinations for Muslim travellers, offering halal-friendly amenities, women-only spaces, and serene getaways that align with your values.</h6>
                    </div>
                    <div className="destinationSectionImages row">
                        <div className="destinationSectionImagesLeft col-lg-5 col-md-7 col-sm-12 d-lg-flex d-md-flex d-sm-block">
                            <div className="image me-lg-4 me-md-4 mb-lg-0 mb-md-0 mb-sm-4">
                                <DestinationImage
                                    imageSrc="https://media.licdn.com/dms/image/v2/D4D12AQGwaM4IeeUfuw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697896164165?e=2147483647&v=beta&t=A79UxVApNb15pSNf3Y6xChiT9HyMIuwxat0a-CQOHc4"
                                    title="ISTANBUL"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="image mb-lg-0 mb-md-0 mb-sm-4">
                                <DestinationImage
                                    imageSrc="https://cdn.trav3l.net/www.gezgintur.com/files/actv/10/whatsapp_image_2021-02-25_at_16_29_49_1-f.jpeg"
                                    title="NEVSEHIR"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="destinationSectionImagesRight col-lg-7 col-md-5 col-sm-12">
                            <div className="image mb-4">
                                <DestinationImage
                                    imageSrc="https://assets.kerzner.com/api/public/content/85486ace888a4ef28d5e7ecfdac5ee51?v=d74e9b04&t=w1920"
                                    title="DUBAI"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="image">
                                <DestinationImage
                                    imageSrc="https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2022/11/_D859762-1-1667589414-1667589414.jpg"
                                    title="BAKU"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection