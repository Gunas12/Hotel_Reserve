import React from 'react'
import HashLoader from "react-spinners/HashLoader";

function Loading() {
    return (
        <div className='ringback'>
            <HashLoader color="#99620f" className='lod1' size={90} />
        </div>
    )
}

export default Loading