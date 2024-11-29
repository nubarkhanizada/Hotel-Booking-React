import "./herosectionbookings.scss";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const HeroSectionBookings = () => {

    return (
        <section className="heroSectionBookings">
            <div className="heroSectionBookingsAll">
                <h4 className="mb-0">YOUR BOOKINGS</h4>
                <h6 className="mb-0">
                    <Link to={"/"}>Home</Link>
                    <SlArrowRight /> Bookings
                </h6>
            </div>
            <div className="overlay"></div>
        </section>
    )
}

export default HeroSectionBookings