import React from 'react'
import BottomNav from './footer/BottomNav'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div >
            <div className='px-32'>{children}</div>
            <div><BottomNav /></div>
        </div>
    )
}

export default Layout