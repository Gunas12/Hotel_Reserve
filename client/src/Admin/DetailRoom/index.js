import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

function Index() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false);
    let arr2 = data.roomNumbers ?? [];
    const { id } = useParams();

    const getdata = async () => {
        setloading(true)
        let res = await axios(`http://localhost:4000/api/rooms/${id}`)
        setloading(false)
        setdata(await res.data)

    }
    useEffect(() => {
        getdata()
    }, [])

    let arr = data.photos ?? [];
    return (
        <div className='container'>
            <Helmet>
                <title>Detail page</title>
                <meta name="description" content="detail page" />
            </Helmet>

            <div className='d-flex justify-content-center align-items-center'>
                <div className="card mt-4" style={{ width: "32rem" }} >
                    <img src={arr[0]} className="card-img-top" alt={data._id} />
                    <div className="card-body">
                        <h5 className="card-title"> Title: {data.title}</h5>
                        <h6 className="card-title">{data.maxPeople} <i class="fa-solid fa-person-walking-luggage"></i></h6>
                        <h6 className="card-title">{data.price} <i class="fa-solid fa-manat-sign"></i></h6>
                        <p className="card-text">{data.desc}</p>
                        <li class="list-group-item"> Room numbers</li>
                        <ul>

                            {arr2.map((item) => (
                                <>

                                    <li class="list-group-item"> Room Number: {item.number},</li>
                                    <li class="list-group-item">unavailableDates: {JSON.stringify(item.unavailableDates)},</li>
                                    <hr />
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Index