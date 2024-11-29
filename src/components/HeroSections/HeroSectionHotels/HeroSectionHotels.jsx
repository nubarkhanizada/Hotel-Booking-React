import "./herosectionhotels.scss";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const HeroSectionHotels = () => {

    return (
        <section className="heroSectionHotels">
            <div className="heroSectionHotelsAll">
                <h4 className="mb-0">CHOOSE YOUR PERFECT DESTINATION</h4>
                <h6 className="mb-0">
                    <Link to={"/"}>Home</Link>
                    <SlArrowRight /> Hotels
                </h6>
            </div>
            <div className="overlay"></div>
        </section>
    )
}

export default HeroSectionHotels