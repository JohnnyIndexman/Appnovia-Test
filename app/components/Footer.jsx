import React from 'react'

function Footer() {
    const d = new Date('02-05-2023')
    const nd = d.getFullYear()

    return (
        <div className='footer'>
            <div className="footer1">
                <div className="footer3">
                    <div className="corsen">
                        <img src="./Images/logo.png"
                            alt="logo"
                            loading='lazy'
                            width='103px'
                            height='21px'
                        />
                        <p>Sed ut perspiciatis unde omnis iste natus <br />
                            error sit voluptatem accusantium
                        </p>
                    </div>

                    <div className="corsen">
                        <h4>SUPPORT</h4>
                        <ul>
                            <li><a href="/">Help & Contact Us</a></li>
                            <li><a href="/">Return & Refund</a></li>
                            <li><a href="/">Online Stores</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="corsen">
                        <h4>COMPANY</h4>
                        <div className="blacky">
                            JohnsonIbekwe
                        </div>
                        <div className="blacky">
                            Caroline
                        </div>
                        <div className="blacky">
                            JohnsonIbekwe
                        </div>
                        <div className="blacky">
                            John
                        </div>
                    </div>

                    <div className="corsen">
                        <h4>LOCATION</h4>
                        <ul>
                            <li><a href="/">Vienna, Hansalgasse, Austria</a></li>
                            <li><a href="/">Berlin, Buschallee, Germany</a></li>
                            <li><a href="/">The Plaza, London UK</a></li>
                        </ul>
                    </div>

                    <div className="corsen">
                        <h3>Get The Latest News</h3>
                        <div className="e-address">
                            <p>E-mail address</p>
                            <img src="./Images/Vector.png"
                                alt="arrow"
                                loading='lazy'
                                width='35.88px'
                                height='17px'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer2">
                <div className="copyright flex">
                    <p>&copy; {nd}</p>
                    <div className="blacky">Johnson</div>
                    <p>ALL RIGHTS RESERVED</p>
                </div>

                <div className="lang flex">
                    <p>ENG</p>
                    <p>|</p>
                    <p>FRA</p>
                    <p>|</p>
                    <p>SKR</p>
                </div>
            </div>
        </div>
    )
}

export default Footer