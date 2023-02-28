import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Mainpage/component/_sidebar.scss'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
function Index() {
    const { user } = useContext(AuthContext);
    const logout = (user) => {
        console.log(localStorage.removeItem("user"));
        window.location.reload(false)
    }
    return (
        <>
            <div className='adm1'>
                <div class="container">
                    <div class="row">
                        <div class="col-3 sidebar.read bg-info">
                            <div class="p-3 bg-info sidestick" >
                                <a href="./main.html"
                                    class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                                    <h3 class="panel">Admin Panel</h3>
                                </a>
                                <ul class="list-unstyled ps-0">
                                    <li class="mb-1">
                                        <button class="btn btn-toggle align-items-center rounded collapsed"
                                            data-bs-toggle="collapse" data-bs-target="#home-collapse">
                                            Home</button>
                                        <div class="collapse show" id="home-collapse">
                                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 ">
                                                <li><a href="#" class="link-dark rounded">Overview</a></li>
                                                <li><a href="#" class="link-dark rounded">Updates</a></li>
                                                <li><a href="#" class="link-dark rounded">Reports</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="mb-1">
                                        <button class="btn btn-toggle align-items-center rounded collapsed"
                                            data-bs-toggle="collapse" data-bs-target="#dashboard-collapse">Users</button>
                                        <div class="collapse " id="dashboard-collapse">
                                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1">
                                                <li><Link to='user1' className="link-dark rounded">Users table</Link></li>
                                                <li><Link to='createuser1' className="link-dark rounded">Create User</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="mb-1">
                                        <button class="btn btn-toggle align-items-center rounded collapsed"
                                            data-bs-toggle="collapse" data-bs-target="#dashboard-collapse">Hotel</button>
                                        <div class="collapse " id="dashboard-collapse">
                                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1">
                                                <li><Link to='room1' className="link-dark rounded">Rooms table</Link></li>
                                                <li><Link to='createroom1' className="link-dark rounded">Create Room</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="border-top my-3"></li>
                                    <li class="mb-1">
                                        <button class="btn btn-toggle align-items-center rounded collapsed"
                                            data-bs-toggle="collapse" data-bs-target="#account-collapse">
                                            <i className="fa-solid fa-user-tie m-2 "></i> {user.username}
                                        </button>
                                        <div class="collapse" id="account-collapse">
                                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 ">

                                                <li><a className="link-dark rounded" onClick={() => logout(user)}>Sign out</a></li>

                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-9'>
                            <Outlet />
                        </div>

                    </div>

                </div >

            </div>
        </>
    )
}

export default Index

