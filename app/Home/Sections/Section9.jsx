'use client'

import Components from '@/app/components/Components'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Section9() {

    const slide = Components().slide

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };




    return (
        <div className='section9'>
            <h3>Instagram</h3>
            <p>Follow us on @qodeinteractive</p>
            
             <div className="carousel-container"> 
           <Slider {...settings}>
                

                    {slide.map(s => (<div className="slider"
                        key={s.id}>

                        <div className="slider-contain">
                            <img src={s.src}
                                alt="instagram-image"
                                width={s.width}
                                height='308.56px'
                            />
                        </div>

                    </div>))}
                </Slider> 

            </div> 
            

            <div className="insta-slide">
                <div className="slides">
                    <div className="slide-imag">
                        <img src="./Images/Frame (1).png"
                            alt="svg"
                            loading='lazy'
                            width='24px'
                            height='6.5px'
                        />
                        FAST DELIVERY
                    </div>
                </div>
                <div className="heighted"></div>
                <div className="slides">
                    <div className="slide-imag">
                        <img src="./Images/svg (10).png"
                            alt="svg"
                            loading='lazy'
                            width='35px'
                            height='10.94px'
                        />
                        FREE RETURNS
                    </div>
                </div>
                <div className="heighted"></div>
                <div className="slides">
                    <div className="slide-imag">
                        <img src="./Images/svg (11).png"
                            alt="svg"
                            loading='lazy'
                            width='14px'
                            height='15.94px'
                        />
                        SECURE CHECKOUT
                    </div>
                </div>
                <div className="heighted"></div>
                <div className="slides">
                    <div className="slide-imag">
                        <img src="./Images/Frame (2).png"
                            alt="svg"
                            loading='lazy'
                            width='30px'
                            height='5px'
                        />
                        ORDER TRACKING
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section9