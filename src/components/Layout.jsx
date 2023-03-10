import React from 'react'
import BottomNav from './footer/BottomNav'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div >
            <div className='lg:mx-auto lg:max-w-8xl 2xl:max-w-9xl'>{children}</div>
            <div><BottomNav /></div>
        </div>
    )
}

export default Layout