
import React from 'react'
import Link from 'next/link'
import Components from '@/app/components/Components'

function Section3() {

  const items = Components().items
  

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }


  return (
    <div className='section3'>
      <div className="bar">
        <Link href='/'>ALL PRODUCT</Link>
        <Link href='/'>LIFESTYLE</Link>
        <Link href='/'>BRAND</Link>
        <Link href='/' className='active'>OUTWEAR</Link>
      </div>

      <div className="products">
        {items.map(item => (<div className="prod-contain" key={item.Id}>

          <div className="product"
            style={{
              background: `url(${item.image}) 
            center no-repeat`,
              backgroundSize: 'cover'
            }}
            key={item.Id}>
            <div className="stat-con" style={{...style, ...(item.stat ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}) }}>
              {item.stat ? <div className="new">
                <h3>{item.stat ? item.stat : null}</h3>
              </div> : null}

              <div className="eyecon">
                <img src="Images/svg (1).png"
                  alt="notification-logo" loading='lazy'
                  height='15px'
                  width='13px'
                />
                <img src="Images/eye.png"
                  alt="eye-logo" loading='lazy'
                  width='16x'
                  height='9.05px'
                />
              </div>
            </div>
          </div>


          <div className="prod-foot">
            <div className="black">
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
            <div className="line"></div>
            <div className="cart">
              <img src="./Images/cartbutton.png"
                alt="notification-logo"
                loading='lazy'
                width='12px'
                height='15.68px'
              />
            </div>

          </div>
        </div>
        )
        )
        }
      </div>
    </div>
  )
}

export default Section3