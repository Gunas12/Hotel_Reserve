import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Picture/about/img-0952.jpg';
import img2 from '../../Picture/about/img-0969.jpg';
import img3 from '../../Picture/about/img-1463.jpg';
import img4 from '../../Picture/about/img-1469.jpg';
function Index() {
    return (
        <>
            <div className='about'>
                <div className='container'>
                    <div>
                        <div className='text-center'>
                            <h4><i className="fa-solid fa-crown"></i></h4>
                            <span>ABOUT US</span>
                            <h3>
                                HOTEL</h3>

                        </div>
                        <p className='mt-2'>"Ayan Palace" — a hotel located in Tovuz district of Azerbaijan Republic.
                            The hotel, construction of which started in March 2018, is the biggest tourism project in Tovuz district. Ayan Palace consists of the ground floor, five floors and a mansard.
                            Complex renovation works were carried out, various decorative trees and bushes were planted, and green grass layers were laid.
                            Furniture and accessories produced abroad were used in the interior design of the building built in Avant-Garde style. All the necessary conditions are provided for the comfortable leisure of the guests. A restaurant for 120 people is functioning. Additionally, an adjacent hall to the hotel for 700 people has been built.
                            Required conditions have been created for the organization of international and national events, conferences. At the same time, it is possible to hold different receptions and presentations in this hall. The hall is equipped with the most contemporary audio and lightning systems. There is a bar serving for 70 people, various offices and shops in the hotel functioning during the whole day.
                            Ayan Palace Hotel consists of 5 floors, 65 rooms and 4 cottages.
                            We offer the highest services existing in the world hotel business. Maximum conditions have been created in the rooms for the leisure of the guests. All the rooms have been provided with a digital safe, mini bar, ventilations systems, satellite TV antenna, international phone line, wireless internet. The guests can also enjoy the beautiful scenery of Tovuz district from their rooms.
                            There is a SPA and Health Center on the ground floor of the hotel. These services are attractive for their modernity. There are fitness halls, closed pool, sauna, Turkish and Finnish baths, massage rooms and hydrotherapy cabinets in the Health Center where the highest conditions have been created for women and men.
                            Moreover, there is a meeting hall for 40 people for organization of various levels of meetings.
                            Ayan Palace is located right in front of Heydar Aliyev Cultural and Recreation Park. The guests of the hotel have also an opportunity to have a worthy rest in this park. Additionally, Tovuz Olympic Sport Complex is also in the vicinity of the hotel.
                            The opening of Ayan Palace hotel has a positive impact to the number of tourists visiting the north-western part of the country.
                        </p>

                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <Carousel variant="none" fade interval={1000} className="aboutimg" >

                                <Carousel.Item interval={400} >
                                    <img
                                        className="d-block w-100 "
                                        src={img1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={400}>
                                    <img
                                        className="d-block w-100"
                                        src={img2}
                                        alt="Third slide"

                                    />

                                </Carousel.Item>
                                <Carousel.Item interval={400}>
                                    <img
                                        className="d-block w-100"
                                        src={img3}
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item interval={400}>
                                    <img
                                        className="d-block w-100"
                                        src={img4}
                                        alt="Third slide"

                                    />


                                </Carousel.Item>

                            </Carousel >

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Index