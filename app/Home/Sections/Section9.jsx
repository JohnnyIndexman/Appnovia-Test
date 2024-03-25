'use client'

import Components from '@/app/components/Components'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';

function Section9() {

    const slide = Components().slide

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                }
            }
        ]
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
                            <Image className='imgs' src={s.src}
                                alt="instagram-image"
                                width={s.width}
                                height={308.56}
                            />
                        </div>

                    </div>))}
                </Slider>

            </div>


            <div className="insta-slide">
                <div className="slides">
                    <div className="slide-imag">
                        <Image src="/Images/Frame (1).png"
                            alt="svg"
                            width={24}
                            height={6.5}
                        />
                        FAST DELIVERY
                    </div>
                </div>
                <div className="heighted"></div>
                <div className="slides">
                    <div className="slide-imag">
                        <Image src="/Images/svg (10).png"
                            alt="svg"
                            width={35}
                            height={10.94}
                        />
                        FREE RETURNS
                    </div>
                </div>
                <div className="heighted"></div>
                <div className="slides">
                    <div className="slide-imag">
                        <Image src="/Images/svg (11).png"
                            alt="svg"
                            width={14}
                            height={15.94}
                        />
                        SECURE CHECKOUT
                    </div>
                </div>
                <div className="heighted"></div>
                <div className="slides">
                    <div className="slide-imag">
                        <Image src="/Images/Frame (2).png"
                            alt="svg"
                            width={30}
                            height={5}
                        />
                        ORDER TRACKING
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section9