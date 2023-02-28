import React from 'react'
import img1 from '../../Picture/activity/billiard.jpg';
import img2 from '../../Picture/activity/bowling.jpg';
import img3 from '../../Picture/activity/tennis.jpeg';

function Index() {
    return (
        <div className='activity'>
            <div className='container'>
                <div className='activity1'>
                    <h4><i className="fa-solid fa-crown"></i></h4>
                    <span>ENJOY GAME</span>
                    <h3>ACTIVITY</h3>
                    <div className='row1'>
                        <div className='col1'><img src={img1} />
                            <div className='overl' >
                                <div className='text'><p >Billiard</p><p> 10<i class="fa-solid fa-manat-sign"></i> / person</p></div></div></div>
                        <div className='col1'><img src={img2} />
                            <div className='overl' >
                                <div className='text'><p >Bowling</p><p>4 <i class="fa-solid fa-manat-sign"></i> / game</p></div></div></div>
                        <div className='col1'><img src={img3} />
                            <div className='overl' >
                                <div className='text'><p >Tennis</p><p>10 <i class="fa-solid fa-manat-sign"></i> / hour</p></div></div></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index