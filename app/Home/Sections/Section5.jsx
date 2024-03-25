import React from 'react'
import Image from 'next/image';

function Section5() {
    return (
        <div className='section5'>
            <Image src="/Images/quote.png"
                alt="quote-logo" loading='lazy'
                width={33}
                height={28.59}
                className='five-img'
            />
            <div className="unde">
                <Image className='img2' src="/Images/svg (3).png"
                    alt="arrow"
                    width={14}
                    height={28.04}
                />
                <p>Accusantium doloremque laudantium, totam rem aperiam. Sed ut<br />
                    perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
                <Image className='img2' src="/Images/svg (4).png"
                    alt="arrow"
                    width={14}
                    height={28.04}
                />
            </div>

            <Image src="/Images/svg (9).png"
                alt="client-logo"
                width={12.25}
                height={12.25}
            />

            <div className="logos">
                <Image src="/Images/client1.png"
                    alt="client-logo"
                    height={35.31}
                    width={182.8}
                />
                <Image src="/Images/client2.png"
                    alt="client-logo"
                    height={35.31}
                    width={182.8}
                />
                <div className="mag">
                    <Image src="/Images/client3.png"
                        alt="client-logo"

                        height={35.31}
                        width={182.8}
                    />
                </div>

                <Image src="/Images/client5.png"
                    alt="client-logo"
                    height={35.31}
                    width={182.8}
                />

                <img src="./Images/client4.png"
                    alt="client-logo"
                    height='35.31px'
                    width='182.8px'
                />
            </div>
        </div>
    )
}

export default Section5