import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Index() {
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
        navigate(`/detail/${id}`)
    }

    return (
        <>
            <div className='Allroom'>
                <div className='m11 '>
                    {loading ? ("Loading...") : (
                        data.map((item, index) => (
                            <div className=' container d12 mt-5 ' key={index}>
                                <div className='d-flex  align-items-center divf'>
                                    <div className=' det  d-flex m-3' >
                                        <Swiper
                                            spaceBetween={5}
                                            slidesPerView={1}>
                                            <SwiperSlide className='slide'><img src={item.photos[0]} /></SwiperSlide>
                                            <SwiperSlide className='slide'><img src={item.photos[1]} /></SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className='det mr'>  <h3>{item.title}</h3>
                                        <div><span><b>Price: </b> <i>{item.price} <i class="fa-solid fa-manat-sign"></i></i></span></div>
                                        <div><span><b>People: </b> <i>{item.maxPeople} <i class="fa-solid fa-user"></i></i></span></div>

                                        <button className='text-right mt-3 btn btn1' onClick={() => handledet(item._id)}>Details</button>
                                    </div>


                                </div>

                            </div >


                        ))
                    )}

                </div>

            </div>
        </>
    )
}

export default Index