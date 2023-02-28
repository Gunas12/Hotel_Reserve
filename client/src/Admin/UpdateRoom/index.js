import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Please, input title').min(3, "Length must be at least 3 symbols"),
    price: Yup.string().required('Please, input price').min(3, "Length must be at least 3 symbols"),
    photos1: Yup.string().required('Please, input photo link').min(5, "Length must be at least 5 symbols"),
    photos2: Yup.string().required('Please, input photo link').min(5, "Length must be at least 5 symbols"),
    maxPeople: Yup.number().required('Please, input  maxPeople').min(3, "Length must be at least 3 symbols"),
    desc: Yup.string().required('Please, input desc').min(3, "Length must be at least 3 symbols"),
    roomNumbers: Yup.string().required('Please, input roomNumbers').min(3, "Length must be at least 3 symbols"),







});
function Index() {
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    const { id } = useParams();
    return (
        <div className=" d-flex justify-content-center align-items-center">
            <div className='d-flex justify-content-center mt-5'>
                <div className='col8'>

                    <Helmet>
                        <title>Admin create page</title>
                        <meta name="description" content="add page" />
                    </Helmet>
                    <Formik
                        initialValues={{
                            title: '',
                            photos1: "",
                            photos2: "",
                            price: '',
                            maxPeople: '',
                            desc: '',
                            roomNumbers: "",
                        }}
                        validationSchema={SignupSchema}

                        onSubmit={(values, { resetForm }) => {

                            const newdata = {
                                title: values.title,
                                photos: [values.photos1, values.photos2],
                                price: values.price,
                                maxPeople: values.maxPeople,
                                desc: values.desc,
                                roomNumbers: values.roomNumbers.split(",").map((room) => ({ number: room })),

                            }

                            console.log(newdata);
                            axios.put(`http://localhost:4000/api/rooms/${id}`, newdata)

                            setdata([...data, newdata])

                            console.log(newdata);

                            alert("Succesfully updated")
                            resetForm({ values: '' })

                        }}
                    >
                        {({ values, errors, touched }) => (

                            <Form className='lContainer mt-5 text-center' >
                                <h4 className='text-center'>Update Room</h4>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <Field name="title" type="text" placeholder="Title" className="lInput form-control m-2" />
                                        {console.log(values.title)}
                                        {errors.title && touched.title ? (
                                            <div className='err text-danger'>{errors.title}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Field name="photos1" placeholder="Photos1" className="lInput form-control m-2" />
                                        {console.log(values.photos1)}
                                        {errors.photos1 && touched.photos1 ? (
                                            <div className='err text-danger'>{errors.photos1}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Field name="photos2" placeholder="Photos2" className="lInput form-control m-2" />
                                        {console.log(values.photos2)}
                                        {errors.photos2 && touched.photos2 ? (
                                            <div className='err text-danger'>{errors.photos2}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <Field name="price" placeholder="Price" className="lInput form-control m-2" />
                                        {errors.price && touched.price ? (
                                            <div className='err text-danger'>{errors.price}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Field name="maxPeople" placeholder="Maxpeople" className="lInput form-control m-2" />
                                        {errors.maxPeople && touched.maxPeople ? (
                                            <div className='err text-danger'>{errors.maxPeople}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <Field name="desc" placeholder="desc" className="lInput form-control m-2" />
                                        {errors.desc && touched.desc ? (
                                            <div className='err text-danger'>{errors.desc}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <Field name="roomNumbers" placeholder="Roomnumbers : 123,456.." className="lInput form-control m-2" type="text" />
                                        {console.log(values.roomNumbers)}
                                        {errors.roomNumbers && touched.roomNumbers ? (
                                            <div className='err text-danger'>{errors.roomNumbers}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end m-2' >

                                    <div >
                                        <button className=" btn  btn-info lButton m-2" onClick={() => navigate("/")}>Go back</button >
                                    </div>
                                    <div>
                                        <button type="submit" className=" btn  btn-info lButton text-r m-2 ">Update</button>
                                    </div>
                                </div>

                            </Form>

                        )}

                    </Formik>
                </div>

            </div>
        </div>
    )
}
export default Index