import "./notfound.scss";
import React from 'react'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notFoundPage'>
            <div className="notFoundImage">
                <img src="https://cdn2.iconfinder.com/data/icons/notional-illustrations/1000/avatars_and_characters___woman_people_old_elder_older_candle_fire_flame_light-512.png" alt="404" />
            </div>
            <h2>404 - PAGE NOT FOUND</h2>
            <p>The page you are trying to access doesn't exist or hase been moved.</p>
            <Link to={"/"}><HiOutlineArrowLongLeft />RETURN HOME</Link>
        </div>
    )
}

export default NotFound