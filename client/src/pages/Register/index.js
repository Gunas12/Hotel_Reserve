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
        <div id="register">
            <div className="register" >
                <div className='row'>
                    <div className='col-6'>

                        <Helmet>
                            <title>Add page</title>
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
                                }

                                axios.post("http://localhost:4000/api/auth/register", newdata)

                                setdata([...data, newdata])
                                console.log(newdata);

                                alert("Succesfully added")
                                resetForm({ values: '' })

                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className='lContainer' >
                                    <h4 className='text-left'>Sign in</h4>
                                    <div className='d-flex regg'>
                                        <div>
                                            <Field name="username" type="text" placeholder="Name" className="lInput form-control" />
                                            {errors.username && touched.username ? (
                                                <div className='err'>{errors.username}</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <Field name="email" placeholder="Email" className="lInput form-control" />
                                            {errors.email && touched.email ? (
                                                <div className='err'>{errors.email}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='d-flex regg'>
                                        <div>
                                            <Field name="country" placeholder="Country" className="lInput form-control" />
                                            {errors.country && touched.country ? (
                                                <div className='err'>{errors.country}</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <Field name="city" placeholder="City" className="lInput form-control" />
                                            {errors.city && touched.city ? (
                                                <div className='err'>{errors.city}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='d-flex regg'>
                                        <div>
                                            <Field name="phone" placeholder="Phone" className="lInput form-control" />
                                            {errors.phone && touched.phone ? (
                                                <div className='err'>{errors.phone}</div>
                                            ) : null}
                                        </div>
                                        <div>
                                            <Field name="password" placeholder="Password" className="lInput form-control" type="password" />
                                            {errors.password && touched.password ? (
                                                <div className='err'>{errors.password}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className='d-flex regg '>



                                        <button className="lButton" onClick={() => navigate("/")}>Go back</button >

                                        <div> <button type="submit" className="lButton">Submit</button>
                                            <p onClick={() => navigate("/login")} className="gologin">Already have account? </p></div>
                                    </div>

                                </Form>
                            )}

                        </Formik>
                    </div>
                    <div className='col-6 col-61'>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Index