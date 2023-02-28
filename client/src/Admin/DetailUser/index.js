import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

function Index() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false);
    const [rooms, setrooms] = useState([])
    const { id } = useParams();

    const getdata = async () => {
        setloading(true)
        let res = await axios(`http://localhost:4000/api/users/${id}`)
        let res2 = await axios(`http://localhost:4000/api/rooms`)
        setloading(false)
        setdata(await res.data)
        setrooms(await res2.data)

    }
    useEffect(() => {
        getdata()
    }, [])
    let arr = data.reserve ?? [];



    return (
        <div className='container'>
            <Helmet>
                <title>Detail page</title>
                <meta name="description" content="detail page" />
            </Helmet>

            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div class="card mt-4" style={{ width: "30rem" }}>
                        <div class="card-header">
                            Id:  {data._id}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> Username:  {data.username}</li>
                            <li class="list-group-item">Contact:  {data.phone}</li>
                            <li class="list-group-item">Gmail:  {data.email}</li>
                            <div  > {arr.map((item, index) => (
                                <div className='border border-dark border-2' key={index}>
                                    <li class="list-group-item"> Type of room:
                                        {
                                            rooms.find(room => room._id === item.roomtypeid).title

                                        }</li>
                                    <li class="list-group-item">Reserve Room ID :
                                        {JSON.stringify(item.roomid)}</li>
                                    <li class="list-group-item">Start date:  {item?.dates[0]?.startDate.slice(0, 10)}</li>
                                    <li class="list-group-item">End date:  {item?.dates[0]?.endDate.slice(0, 10)}</li>

                                </div>

                            ))}</div>
                        </ul>



                    </div>
                </div>
            </div>






        </div >
    )
}

export default Index