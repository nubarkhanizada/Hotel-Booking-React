import "./header.scss";
import React from 'react'
import { CiMail } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
    return (
        <>
            <header className="headerLarge">
                <div className="containerDefault">
                    <div className="headerAll d-flex justify-content-between align-items-center">
                        <div className="headerLeft d-flex justify-content-between align-items-center">
                            <NavLink className="logo navLink" to={'/'}><Logo /></NavLink>
                            <NavLink className="navLink" to={'/'}>HOME</NavLink>
                            <NavLink className="navLink" to={'/hotels'}>HOTELS</NavLink>
                            <NavLink className="navLink" to={'/bookings'}>BOOKINGS</NavLink>
                        </div>
                        <div className="headerRight d-flex justify-content-between align-items-center">
                            <select className="currency" name="currency" id="currency">
                                <option value="usd">USD</option>
                                <option value="euro">TRY</option>
                                <option value="azn">AZN</option>
                            </select>
                            <select className="language" name="language" id="language">
                                <option value="eng">EN</option>
                                <option value="esp">TR</option>
                                <option value="aze">AZ</option>
                            </select>
                            <div className="mail">
                                <CiMail />
                            </div>
                            <Dropdown className="location">
                                <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="locationTitle">
                                    EXPLORE THE DESTINATION
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="locationMenu">
                                    <Dropdown.Item className="locationMenuItem" href="#">ROOMIFY DUBAI</Dropdown.Item>
                                    <Dropdown.Item className="locationMenuItem" href="#">ROOMIFY ANTALYA</Dropdown.Item>
                                    <Dropdown.Item className="locationMenuItem" href="#">ROOMIFY BAKU</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </header>
            <header className="headerMobile">
                <div className="containerDefault">
                    <div className="headerAll d-flex justify-content-between align-items-center">
                        <div className="headerLeft">
                            <NavLink className="logo navLink" to={'/'}><Logo /></NavLink>
                        </div>
                        <div className="headerRight">
                            <Navbar expand="lg" className="menuBar">
                                <Navbar.Toggle aria-controls="offcanvasNavbar" className="menuBarIcon" />

                                <Navbar.Offcanvas
                                    id="offcanvasNavbar"
                                    aria-labelledby="offcanvasNavbarLabel"
                                    placement="end"
                                    className="sidebarMenu"
                                >
                                    <Offcanvas.Header closeButton className="sidebarCloseButton">
                                        <Offcanvas.Title id="offcanvasNavbarLabel" className="sidebarTitle">Halal Holiday</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className="sidebarBody">
                                        <Nav className="sidebarNav justify-content-end">
                                            <div className="navLink d-flex justify-content-between align-items-center pb-2">
                                                <select className="currency w-50 me-3" name="currency" id="currency">
                                                    <option value="usd">USD</option>
                                                    <option value="euro">TRY</option>
                                                    <option value="azn">AZN</option>
                                                </select>
                                                <select className="language w-50" name="language" id="language">
                                                    <option value="eng">EN</option>
                                                    <option value="esp">TR</option>
                                                    <option value="aze">AZ</option>
                                                </select>
                                            </div>
                                            <Link className="navLink" to={'/'} >HOME</Link>
                                            <Link className="navLink" to={'/hotels'} >HOTELS</Link>
                                            <Link className="navLink" to={'/bookings'} >BOOKINGS</Link>
                                            <Link className="navLink" to={'/destinations'} >EXPLORE THE DESTINATION</Link>
                                            <Link className="navLink mail" to={'mailto:support@halalholiday.com'} ><CiMail /> SEND MAIL</Link>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header