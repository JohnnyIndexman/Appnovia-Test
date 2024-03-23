import Navbar from '@/app/components/Navbar'
import React from 'react'

function section1() {
    
    return (
        <div className='section-one'>
             <Navbar /> 

            <div className="divide"></div>

            <div className="arrow">
                <img src="./Images/svg (3).png" alt="arrow" />
                <img src="./Images/svg (4).png" alt="arrow" />
            </div>

            <div className="mixed">
                <h1>Mixed Textiles</h1>
                <p>Lorem, ipsum dolor sit amet consectetur<br/> adipisicing elit.
                    Aspernatur, provident aliquam.
                </p>
                <div className='button oneness'>SHOP COLLECTION</div>
            </div>

            <div className="divide"></div>
            
        </div>
    )
}

export default section1