
import Link from 'next/link'
import React from 'react'

function Section6() {


    return (
        <div className='section6'>
            <div className="background2">
                <div className="h1">
                    <h1>ONYX </h1>
                    <img src="./Images/image.png" alt="x-logo"
                        loading='lazy'
                        width='18px'
                        height='18px'
                    />
                    <h1>THE FLOW</h1>
                </div>

                <p><a href="/">READ MORE</a></p>
            </div>

            <h2>Read Our Blog Posts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing ectetur <br />
                elit, sed do eiusmod.
            </p>

            <div className="blog-contain">
                <div className="blog">
                    <div className="blog1 one">
                        <div className="date">
                            SEPTEMBER 29, 2022
                        </div>
                    </div>
                    <div className="fashion">
                        <h4>FASHION</h4>
                        <div className="height"></div>
                        <h4>INSPIRATION</h4>
                    </div>
                    <div className="underline"></div>
                    <h3>Top 10 Winter Essentials For 2022 You Should <br />Try</h3>
                    <Link href='/'>READ MORE</Link>
                </div>

                <div className="blog ">
                    <div className="blog1 two">
                        <div className="date">
                            SEPTEMBER 29, 2022
                        </div>
                    </div>
                    <div className="fashion">
                        <h4>FASHION</h4>
                        <div className="height"></div>
                        <h4>INSPIRATION</h4>
                    </div>
                    <div className="underline"></div>
                    <h3>The Complete Communication Skills Master<br />
                        Class For Work
                    </h3>
                    <Link href='/'>READ MORE</Link>
                </div>

                <div className="blog">
                    <div className="blog1 three">
                        <div className="date">
                            SEPTEMBER 29, 2022
                        </div>
                    </div>

                    <div className="fashion">
                        <h4>FASHION</h4>
                        <div className="height"></div>
                        <h4>INSPIRATION</h4>
                    </div>
                    <div className="underline"></div>
                    <h3>Premium Consultant Course For You</h3>
                    <Link href='/'>READ MORE</Link>
                </div>
            </div>

        </div>
    )
}

export default Section6