import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AuthContext } from '../../context/AuthContext'
import { SearchContext } from '../../context/SearchContext'
import 'swiper/css';
import Reserve from '../reserve/Reserve';
import Search from '../components/Search';
function Index() {
    const [data, setdata] = useState([])
    const [loading1, setloading1] = useState(false);
    const navigate = useNavigate()
    const { id } = useParams();

    const getdata = async () => {
        setloading1(true)
        let res = await axios(`http://localhost:4000/api/rooms/${id}`)
        setloading1(false)
        setdata(await res.data)
    }
    useEffect(() => {
        getdata()

    }, [])
    let arr = data.photos ?? [];

    const location = useLocation();
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(AuthContext);
    const { dates, options } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        if (date1 || date2) {
            const timeDiff = Math.abs(date2.getTime() - date1.getTime());
            const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
            return diffDays;
        }

        else {
            return 0;
        }
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate);
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };


    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    const handleClick = () => {
        if (user && days !== 0) {
            setOpenModal(true);


        }
        else if (user) {
            if (days == 0) {
                alert("Select date")
                window.location.href = "/#search";
            }
        }
        else {
            navigate("/login");
        }

    };



    return (
        <>

            <div className=' details d-flex justify-content-center align-items-center'>
                <Helmet>
                    <title>Detail page</title>
                    <meta name="description" content="detail page" />
                </Helmet>
                <div>

                    {loading1 ? ("LOADING..") : (<div className=' container d-flex justify-content-evenly det1'>
                        <div className='d-flex justify-content-evenly align-items-center row'>

                            <div className='container det m-1' >

                                <Swiper

                                    spaceBetween={5}
                                    slidesPerView={1}
                                >
                                    <SwiperSlide className='slide'><img src={arr[0]} /></SwiperSlide>
                                    <SwiperSlide className='slide'><img src={arr[1]} /></SwiperSlide>



                                </Swiper>



                            </div>
                            <div className='det mr'>  <h3>{data.title}</h3>
                                <div><span><b>Price: </b> <i>{data.price} <i class="fa-solid fa-manat-sign"></i></i></span></div>
                                <div><span><b>People: </b> <i>{data.maxPeople} <i class="fa-solid fa-user"></i></i></span></div>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <button className='btn m-1'><i className="fa-solid fa-wifi"></i></button>
                                    <button className='btn m-1'><i className="fa-solid fa-bath"></i></button>
                                    <button className='btn m-1'><i className="fa-solid fa-tv"></i></button>
                                    <button className='btn m-1'><i className="fa-solid fa-utensils"></i></button>

                                </div>
                                <div ><span><b>Description: </b> {data.desc}.</span></div>

                                <button className='text-right mt-3 btn btn1' onClick={handleClick}>Book now!</button>


                            </div>

                        </div >




                    </div >)}
                    {openModal && <Reserve setOpen={setOpenModal} hotelId={id} user={user} cemday={days} price={data.price} room={options.room} />}

                </div>
            </div>

        </>
    )
}

export default Index