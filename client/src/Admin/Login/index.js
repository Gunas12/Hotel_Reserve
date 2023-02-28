import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './_login.scss'

const Index = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:4000/api/auth/login", credentials);
            if (res.data.isAdmin) {
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

                navigate(-1)
            } else {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: { message: "You are not allowed!" },
                });
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }

    };


    return (
        <div className="login1">
            <div className="lContainer ">
                <div >

                    <div className="bor" >

                        <div>
                            <h3 className="text-center text1 mb-4 ">Log in</h3>
                            <div className="d-flex align-items-center m-2"><i class="fa-solid fa-user m-2" ></i>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    onChange={handleChange}
                                    className="lInput form-control mb-2"
                                    required />
                            </div>
                            <div className="d-flex align-items-center m-2 mb-0"><i class="fa-solid fa-lock m-2 mb-0"></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    onChange={handleChange}
                                    className="lInput form-control"
                                    required /></div>
                            <div className="btnss">  {error ? (<span style={{ color: "red" }}>You are not allowed!</span>) : null}</div>
                            <div className="btnss mt-2"><button disabled={loading} onClick={handleClick} className="lButton mb-1">
                                Login
                            </button>

                            </div>



                        </div>
                    </div>


                </div></div>
        </div >
    );
};

export default Index;
