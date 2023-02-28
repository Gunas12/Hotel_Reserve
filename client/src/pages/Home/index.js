import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Counter from "./Counter";
import axios from "axios";
import img2 from '../../Picture/slide11.jpg';
import img4 from '../../Picture/slide10.jpg';
import img5 from '../../Picture/slide12.jpg';
import img6 from '../../Picture/slide13.jpg';
import { Button } from 'semantic-ui-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Search from '../components/Search'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

import 'swiper/css';

const Index = () => {
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    window.addEventListener('load', function () {
        var searchComponent = document.getElementById('search');
        if (searchComponent) {
            searchComponent.scrollIntoView();
        }
    });
    const handleClick1 = () => {
        setIsVisible1(true);
        setIsVisible2(false);
        setIsVisible3(false)
    };
    const handleClick2 = () => {
        setIsVisible1(false);
        setIsVisible2(true);
        setIsVisible3(false)
    };
    const handleClick3 = () => {
        setIsVisible1(false);
        setIsVisible2(false);
        setIsVisible3(true)
    };
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false);
    const navigate = useNavigate()
    const getdata = async () => {
        setloading(true)
        let res = await axios("http://localhost:4000/api/rooms")
        setloading(false)
        setdata(await res.data)
    }
    useEffect(() => {
        getdata()
    }, [])
    const handledet = (id) => {
        navigate(`detail/${id}`)
    }

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const [vertical, setvertical] = useState(false)

    useEffect(() => {

        if (window.innerWidth < 900) {

            setvertical(true)
        }
        else {

            setvertical(false)

        }

    }, [vertical])
    const className = vertical ? "vertical" : null

    return (
        <>

            <div className='section1' >


                <Carousel variant="dark" fade interval={1000} >

                    <Carousel.Item interval={400} className="caruselitem">
                        <img
                            className="d-block imgg "
                            src={img4}
                            alt="Third slide"
                        />
                        <div class="card-img-overlay wrapper">
                            <div className="box" data-aos="fade-down" >
                                <div className='content '  >
                                    <h4>SUMMER VACATIONS</h4>
                                    <p>Memories that will last forever</p>
                                    <a href="#search" className='rom2'><button className='rom1 text-light'>SELECT DATE   <i class="fa-solid fa-right-long"></i> </button></a>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item interval={400} className="caruselitem">
                        <img
                            className="d-block imgg"
                            src={img5}
                            alt="Third slide"

                        />
                        <div class="card-img-overlay wrapper">
                            <div className="box" data-aos="zoom-in">
                                <div className='content'>
                                    <h4>SUMMER VACATIONS</h4>
                                    <p>Memories that will last forever</p>
                                    <a href="#search" className='rom2'><button className='rom1 text-light'>SELECT DATE   <i class="fa-solid fa-right-long"></i> </button></a>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={400} className="caruselitem">
                        <img
                            className="d-block imgg"
                            src={img6}
                            alt="Third slide"
                        />
                        <div class="card-img-overlay wrapper">
                            <div className="box" data-aos="zoom-in">
                                <div className='content'>
                                    <h4>SUMMER VACATIONS</h4>
                                    <p>Memories that will last forever</p>
                                    <a href="#search" className='rom2'><button className='rom1 text-light'>SELECT DATE   <i class="fa-solid fa-right-long"></i> </button></a>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={400} className="caruselitem">
                        <img
                            className="d-block imgg"
                            src={img2}
                            alt="Third slide"

                        />
                        <div class="card-img-overlay wrapper">
                            <div className="box" data-aos="flip-right">
                                <div className='content' >
                                    <h4>SUMMER VACATIONS</h4>
                                    <p>Memories that will last forever</p>
                                    <a href="#search" className='rom2'><button className='rom1 text-light'>SELECT DATE  <i class="fa-solid fa-right-long"></i> </button></a>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>

                </Carousel >

            </div >
            <div className='section2' >
                <div className='container con1 mt-5 mb-5'>
                    <h4><i className="fa-solid fa-crown"></i></h4>
                    <span>OUR SPECIALS</span>
                    <h3>Where Simple Luxury &<br />
                        Tranquility Meet</h3>
                </div>
                <div className='text-center mb-5 container d-flex justify-content-center align-items-center'>
                    <Button.Group className={className} >
                        <Button className='button1 ui inverted brown button ' onClick={handleClick1}><p className='buttonp'>Restaurants & Bars</p></Button>
                        <Button className='button1 ui inverted brown button ' onClick={handleClick2}><p className='buttonp'>Meetings & Events</p></Button>
                        <Button className='button1 ui inverted brown button ' onClick={handleClick3}><p className='buttonp'>Weddings & Celebrations</p></Button>
                    </Button.Group>
                </div>
                <div id="umum">
                    <div className={isVisible1 ? 'visible' : 'hidden'} id="rest">

                        <div className='div1' data-aos="zoom-in">
                            <div className='container'>
                                <h4>Restaurants & Bars</h4>
                                <p>In the main restaurant located in our hotel, you can taste delicious dishes of both Azerbaijani and world cuisine.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={isVisible2 ? 'visible' : 'hidden'} id="meet">
                        <div className='div1' data-aos="zoom-in">
                            <div className='container'>
                                <h4>Meetings & Events</h4>
                                <p>Achieve more with every meeting and event you plan with us. Create priceless experiences that are engaging and productive.</p>
                            </div>
                        </div>
                    </div>
                    <div className={isVisible3 ? 'visible' : 'hidden'} id="wedd">
                        <div className='div1' data-aos="zoom-in">
                            <div className='container'>
                                <h4>Weddings & Celebrations</h4>
                                <p>You can also book our restaurant to celebrate New Year parties, birthday events and other special occasions.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="section5"  >
                <div >
                    <div className='container con1 mt-5 mb-5 text-center'>
                        <h4><i className="fa-solid fa-crown"></i></h4>
                        <span >Room Options</span>
                        <h3>Our Rooms & Suites</h3>
                    </div>
                    <div >
                        <div id="search">
                            <Swiper
                                paceBetween={80}
                                slidesPerView={3}
                                breakpoints={
                                    {

                                        300: {

                                            slidesPerView: 1,
                                            paceBetween: 80
                                        },

                                        770: {

                                            slidesPerView: 2,
                                            paceBetween: 80
                                        },
                                        1300: {

                                            slidesPerView: 3,
                                            paceBetween: 80
                                        },

                                    }
                                }
                                loop={true}>
                                {loading ? ("Loading...") : (
                                    data.map((item, index) => (
                                        <SwiperSlide style={{ width: "18rem" }} key={index} onClick={() => handledet(item._id)} >
                                            <div className="card1 ">
                                                <div className='imgBx'>
                                                    <img src={item.photos[0]} className="card-img-top" alt="sekil" />
                                                </div>
                                                <div className='content'>
                                                    <h4>{item.title}</h4>
                                                    <p className='pnew'> <span className='span1'>from {item.price} <i className="fa-solid fa-manat-sign"></i> /night</span>  </p>
                                                </div>
                                            </div> </SwiperSlide>

                                    ))
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div >


                    <Search className="salam1" /></div>
            </div>
            <div className='section3' >
                <div className='section3w'>
                    <div className='container con1 mt-5 mb-5'>
                        <h4><i className="fa-solid fa-crown"></i></h4>
                        <span>NEARBY PLACES</span>
                        <h3>Why Stay With Us</h3>
                    </div>

                    <div className='row1'>
                        <div className='col-3 col31' data-aos="zoom-in"><div className='overlay '><h5 className='hover-underline-animation'>Swimming Pool</h5></div></div>
                        <div className='col-3 col32 ' data-aos="zoom-in"><div className='overlay'><h5 className='hover-underline-animation'>Spa Center</h5></div></div>
                        <div className='col-3 col33' data-aos="zoom-in"><div className='overlay'><h5 className='hover-underline-animation'>Restaurant</h5></div></div>
                        <div className='col-3 col34' data-aos="zoom-in"><div className='overlay'><h5 className='hover-underline-animation'>Fitness Center</h5></div></div>

                    </div>
                </div>
            </div>
            <div className='section6'>
                <div className='container1' id="conter">
                    <div className='container'>


                        <div className='col1' data-aos="zoom-in"><div><i className="fa-regular fa-face-smile text-light"></i> <Counter number={150} title="Happy Customers" className="text-light" /></div></div>
                        <div className='col1' data-aos="zoom-in"><div><i class="fa-solid fa-person-shelter text-light"></i> <Counter number={85} title="Rooms" className="text-light" /></div></div>
                        <div className='col1' data-aos="zoom-in"><div ><i className="fa-solid fa-utensils text-light"></i> <Counter number={55} title="Meal Delivered" className="text-light" /></div></div>
                        <div className='col1' data-aos="zoom-in"><div><i className="fa-solid fa-star text-light"></i> <Counter number={74} title="Five Stars" className="text-light" /></div></div>

                    </div>
                </div>
            </div>
            <div className='last' id="contact">
                <div className='container con1 '>
                    <h4><i className="fa-solid fa-crown"></i></h4>
                    <span>NEARBY PLACES</span>
                    <h3>Located in the Heart
                        of City</h3>
                    <div className='container'>
                        <div className='row1 '>
                            <div className='col7'>
                                <iframe className='xerite' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.700864357157!2d45.64353669017774!3d40.988030630667424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4040d07f3e22cae7%3A0x35c07bd7261df60a!2sAYAN%20PALACE!5e0!3m2!1sen!2s!4v1675794534126!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className='col5'>
                                <h4 className='h44'>Ayan Place</h4>
                                <p className='p44'><i className="fa-solid fa-location-dot"></i> Tovuz Rayon, Bozalqanlı kəndi
                                    Heydər Əliyev küçəsi</p>
                                <p className='p44'><i className="fa-solid fa-phone"></i>+(99450) 229 90 09</p>
                                <p className='p44'><i className="fa-solid fa-fax"></i> +(99422) 315 73 85</p>
                                <p className='p44'><i className="fa-solid fa-envelope"></i> info@ayanpalace.az</p>


                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}

export default Index;