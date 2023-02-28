import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Dropdown from 'react-bootstrap/Dropdown';
function Navbar() {
    const { user } = useContext(AuthContext);
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    const logout = (user) => {
        localStorage.removeItem("user");
        window.location.reload(false)
    }

    window.addEventListener('scroll', changeNavbarColor);
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");

    };
    return (

        <nav id="nav" className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <div className='nav__brand nav_logo'><img src='https://www.ayanpalace.az/templates/default/images/logo.png' alt="nav" /></div>
            <ul className={active}>
                <li className="nav__item">
                    <Link to='/' className="nav__link">Home</Link>
                </li>
                <li className="nav__item">
                    <Link to='about' className="nav__link">About</Link>
                </li>
                <li className="nav__item">
                    <Link to='room' className="nav__link">Rooms</Link>
                </li>


                <li className="nav__item">
                    <Link to='activity' className="nav__link">Activity</Link>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#contact">Contact us</a>
                </li>
                <li>
                    {user ? (<Dropdown >
                        <Dropdown.Toggle id="dropdown-basic" className="username" style={{ backgroundColor: "rgb(153, 98, 15)" }} >
                            <span><i className="fa-solid fa-user"></i>  {user.username}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            <Dropdown.Item id="sp1" onClick={() => logout(user)}><span>Log out<i className="fa-solid fa-right-from-bracket">  </i> </span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>) : (
                        <div className="navItems">
                            <a href="#register"><Link to="register" className="navButton">Register</Link></a>
                            <a href="#login"><Link to="login" className="navButton">Login</Link></a>
                        </div>
                    )}
                </li>

            </ul>

            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>

    );
}

export default Navbar;