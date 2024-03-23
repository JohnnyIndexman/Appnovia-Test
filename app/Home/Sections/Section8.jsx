import Image from 'next/image'
import React from 'react'

function Section8() {
    return (
        <div className='section8'>

            <div className="image7-contain">
                <div className="images">
                    <Image src="/Images/homeimg2.png"
                        alt="home-image"
                        width={493.31}
                        height={697.41}
                    />
                </div>
                <div className="images">
                    <Image src="/Images/homeimg1.png"
                        alt="home-image"
                        width={493.31}
                        height={697.41}
                    />
                </div>
            </div>
            <div className="hel">
                <h2>Meet The Artists<br /> Behind The Corsen<br />
                    Maria & Sophia
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur elit,<br />
                    sed do eiusmod tempor incididunt ut labore
                    et <br />dolore magna.
                </p>
                <div className='button'>SHOP COLLECTION</div>
            </div>

        </div>
    )
}

export default Section8