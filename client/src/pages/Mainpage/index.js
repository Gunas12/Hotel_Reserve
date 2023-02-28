import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2'
import { Outlet } from "react-router";
import Footer from '../components/Footer';
import Loading from '../components/loading';

import BackTop from '../components/BackTop';
function Index() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    //console.log = console.warn = console.error = () => { };
    return (
        <div>{loading ? (<Loading />) : (<> <Navbar2 />
            < Outlet />
            <Footer /> <BackTop /></>)}



        </div>
    )
}

export default Index