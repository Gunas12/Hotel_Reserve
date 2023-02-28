import React, { useEffect, useState } from 'react'

function BackTop() {
    const [backtop, setbacktop] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {

                setbacktop(true)
            }
            else {

                setbacktop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backtop && (<button className='d-flex justify-content-center align-items-center' style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "57px",
                width: "57px",
                fontSize: "50px",
                zIndex: 1,
                borderRadius: "50%",
                backgroundColor: "rgba(153, 98, 15,1)",
                color: "white",
                border: "none"



            }} onClick={scrollUp} >


                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-up " viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </button>)}
        </div>
    )
}

export default BackTop