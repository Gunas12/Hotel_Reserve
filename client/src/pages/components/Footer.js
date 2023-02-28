import React from 'react'

function Footer() {
    return (
        <div className='footer'>

            <div className='container con1 '>
                <div className='row '>
                    <div className='hr'><hr /></div>
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <div>© 2023 Bütün hüquqlar qorunur Unicode Digital Agency</div>
                        <div><a href="https://www.facebook.com/AyanPalace/" target="_blank" className='m-2'><img alt="Facebook" height="35" src="https://www.ayanpalace.az/medias/media/other/facebook.png" width="35" /> </a>
                            <a href="https://www.instagram.com/ayanpalace/" target="_blank" className='m-2'><img alt="Instagram" height="35" src="https://www.ayanpalace.az/medias/media/other/instagram.png" width="35" /></a></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer