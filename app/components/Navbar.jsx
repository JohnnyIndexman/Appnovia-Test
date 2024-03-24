'use client'

import React,{ useState, useEffect } from 'react'
import Link from 'next/link'
import section1 from '../Home/Sections/Section1'
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";


function Navbar() {
    const section = section1()
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize(); 
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const style =  section1 ?
    isMobile
        ? {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            borderBottom: '1px solid #000',
            height: '90px',
          }
        : {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            borderBottom: '1px solid #000',
            height: '90px',
            width: '100%',
            alignSelf: 'center',
            padding: '0',
          }
      : {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box',
          borderBottom: '1px solid #000',
          height: '90px',
          width: '100%'
        };
  


    const isClicked = true
    const [styles, setStyles] = useState({
        display: 'none'
    })

    const handleOpen = () =>{
        if(isClicked){
            setStyles({
                display:"block"
            })
        }
        
    }

    const handleClose = () =>{
        if(isClicked){
            setStyles({
                display: 'none'
            })
        }
        
    }


    return (
        <div className="nav" >
            <div className="first-nav" style={style}>
                <div className="nav-first">
                    <img src="./Images/logo.png" alt="logo" loading='lazy' />
                    <nav>
                        <Link href='/'>HOME</Link>
                        <Link href='/'>PAGES</Link>
                        <Link href='/'>SHOP</Link>
                        <Link href='/'>PORTFOLIO</Link>
                        <Link href='/'>BLOG</Link>
                    </nav>
                </div>

                <div className="side-nav">
                    <div className="search">
                        <p>SEARCH</p>
                        <img src="./Images/svg.png" alt="search-icon" loading='lazy' />
                    </div>
                    <div className="search">
                        <p>CART</p>
                        <div className="flex">
                            <img src="./Images/cart.png" alt="cart-icon" loading='lazy' />
                            <p>0</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src="./Images/svg (1).png" alt="notification-icon" loading='lazy' />
                        <p>0</p>
                    </div>
                    <div className="search">
                        <img src="./Images/svg (2).png" alt="avatar" loading='lazy' />
                    </div>
                </div>
                <CiMenuFries size='30px'
                    className='hamburger'
                    onClick={handleOpen}
                />
            </div>

            <div className="second-nav" style={styles}>
                <div className="nav-first1" >
                    <AiOutlineClose size='30px'
                        className='close'
                        onClick={handleClose}
                        style={styles}
                    />
                    <nav className='nav1'>
                        <Link href='/'>HOME</Link>
                        <Link href='/'>PAGES</Link>
                        <Link href='/'>SHOP</Link>
                        <Link href='/'>PORTFOLIO</Link>
                        <Link href='/'>BLOG</Link>
                    </nav>
                </div>

                <div className="side-nav1 nav1">
                    <div className="search">
                        <p>SEARCH</p>
                        <img src="./Images/svg.png" alt="search-icon" loading='lazy' />
                    </div>
                    <div className="search">
                        <p>CART</p>
                        <div className="flex">
                            <img src="./Images/cart.png" alt="cart-icon" loading='lazy' />
                            <p>0</p>
                        </div>
                    </div>
                    <div className="flex">
                        <img src="./Images/svg (1).png" alt="notification-icon" loading='lazy' />
                        <p>0</p>
                    </div>
                    <div className="search">
                        <img src="./Images/svg (2).png" alt="avatar" loading='lazy' />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar