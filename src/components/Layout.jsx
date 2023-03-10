import React from 'react'
import BottomNav from './footer/BottomNav'
import Navbar from './Navbar'
import Footer from './footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div >
            <div className='xl:mx-auto xl:max-w-9xl'>{children}</div>
            <div><BottomNav /></div>
            <div><Footer /></div>
        </div>
    )
}

export default Layout