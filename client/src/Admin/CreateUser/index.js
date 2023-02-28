import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Please, input name').min(3, "Length must be at least 3 symbols"),
    email: Yup.string().required('Please, input email').min(5, "Length must be at least 5 symbols").email("Please, enter correctly"),
    country: Yup.string().required('Please, input country').min(3, "Length must be at least 3 symbols"),
    city: Yup.string().required('Please, input city').min(3, "Length must be at least 3 symbols"),
    phone: Yup.number().required('Please, input phone').min(9, "Length must be at 9 symbols"),
    password: Yup.string().required('Please, input password').min(8, "length must be at least 8 symbols"),


});
function Index() {
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    return (
        <div className='saalm'>
            <div className=" d-flex justify-content-center align-items-center mt-5">
                <div className=' d-flex justify-content-evenly align-items-center'>
                    <div>

                        <Helmet>
                            <title>Admin create page</title>
                            <meta name="description" content="add page" />
                        </Helmet>
                        <Formik
                            initialValues={{
                                username: '',
                                email: '',
                                country: '',
                                city: '',
                                phone: '',
                                password: '',
                                isAdmin: false
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { resetForm }) => {
                                const newdata = {
                                    username: values.username,
                                    email: values.email,
                                    country: values.country,
                                    city: values.city,
                                    phone: values.phone,
                                    password: values.password,
                                    isAdmin: values.isAdmin
                                }

                                axios.post("http://localhost:4000/api/auth/register", newdata)

                                setdata([...data, newdata])


                                alert("Succesfully added")
                                resetForm({ values: '' })

                            }}
                        >
                            {({ errors, touched }) => (

                                <Form className='lContainer mt-5 text-center' >
                                    <h4 className='text-center'>Create user</h4>
                                    <div className='d-flex'>
                                        <div>
                                            <Field name="username" type="text" placeholder="Name" className="lInput form-control m-2" />
                                            {errors.username && touched.username ? (
                                                <div className='err text-danger'>{errors.username}</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <Field name="email" placeholder="Email" className="lInput form-control m-2" />
                                            {errors.email && touched.email ? (
                                                <div className='err text-danger'>{errors.email}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <Field name="country" placeholder="Country" className="lInput form-control m-2" />
                                            {errors.country && touched.country ? (
                                                <div className='err text-danger'>{errors.country}</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <Field name="city" placeholder="City" className="lInput form-control m-2" />
                                            {errors.city && touched.city ? (
                                                <div className='err text-danger'>{errors.city}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <Field name="phone" placeholder="Phone" className="lInput form-control m-2" />
                                            {errors.phone && touched.phone ? (
                                                <div className='err text-danger'>{errors.phone}</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <Field name="password" placeholder="Password" className="lInput form-control m-2" type="password" />
                                            {errors.password && touched.password ? (
                                                <div className='err text-danger'>{errors.password}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <label>
                                            <Field type="checkbox" name="isAdmin" className="m-1" />
                                            <b>isAdmin?</b>
                                        </label> </div>
                                    <div className='d-flex justify-content-end m-2' >

                                        <div >
                                            <button className="lButton m-2 btn btn-info" onClick={() => navigate("/")}>Go back</button >
                                        </div>
                                        <div>
                                            <button type="submit" className="lButton text-r m-2 btn btn-info">Submit</button>
                                        </div>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Index