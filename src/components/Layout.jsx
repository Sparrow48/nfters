import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div >
            <div>
                <Navbar />
            </div >
            <div className='px-16'>{children}</div>
            <div></div>
        </div>
    )
}

export default Layout