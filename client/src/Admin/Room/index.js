import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function Index() {
    const [data, setdata] = React.useState([])
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
        navigate(`detailroom/${id}`
        )
    }
    const handleupdate = (id) => {
        navigate(`updateroom/${id}`)
    }
    const handledel = (id) => {
        axios.delete(`http://localhost:4000/api/rooms/${id}/63e517c1f16c1ef48f9d284f`).then(() => getdata())
        alert("Succesfully deleted")

    }

    return (
        <>
            <div className='container'>
                <h3 className="text-center m-5">Rooms Table</h3>
                <button className='btn btn-info d-flex justify-content-end m-2'><Link to="/createuser">Create</Link></button>
                {loading ? ("LOADING...") : (<TableContainer component={Paper} className="m-5" sx={{ border: 1, borderColor: 'grey.500' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ borderColor: "red" }}>
                            <TableRow>
                                <TableCell><b>#</b></TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>MaxPeople</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Number of rooms</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                ><TableCell ><b>{row._id.slice(0, 5)}</b></TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell >{row.maxPeople}</TableCell>
                                    <TableCell >{row.price} <i class="fa-solid fa-manat-sign"></i></TableCell>
                                    <TableCell >{row.roomNumbers.length}</TableCell>
                                    <TableCell ><button className='btn btn-info text-light m-1' onClick={() => { handledet(row._id) }}><i className="fa-solid fa-eye" ></i></button>
                                        <button className='btn btn-warning text-light m-1' onClick={() => { handleupdate(row._id) }} ><i className="fa-solid fa-pen"></i></button>
                                        <button className='btn btn-danger text-light m-1' onClick={() => { handledel(row._id) }} ><i className="fa-solid fa-trash"></i></button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>)}
            </div>
        </>
    )
}

export default Index