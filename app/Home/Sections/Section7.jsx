import React from 'react'
import Image from 'next/image'

function Section7() {
    return (
        <div className='section7'>
            <h2>Sign up to our newsletter for all the <br />
                latest news  & discounts.
            </h2>
            <div className="arrow2">
                <p>E-mail address</p>
                <Image src="/Images/Vector.png"
                    alt="arrow"
                    width={35.88}
                    height={17}
                />
            </div>
        </div>
    )
}

export default Section7