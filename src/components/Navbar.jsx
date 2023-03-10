import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavButton from './nav/NavButton'
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import NavSearch from './nav/NavSearch';

const Navbar = () => {
    const [isToggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!isToggle)

    }
    return (
        <div className='border-b-2'>

            <div className='flex flex-col gap-5 mx-auto lg:gap-10 lg:max-w-9xl xl:px-10'>

                <div className='flex justify-between px-4 py-5 lg:px-12'>
                    <div className='flex pt-1 xl:gap-12'>
                        <div className='border-r-2 border-gray-100'>
                            <NavLink className='text-3xl font-bold text-indigo-700 xl:pr-5'>NFTERS</NavLink>
                        </div>
                        <div className='hidden gap-12 pt-1 font-semibold xl:flex'>
                            <NavLink>MarketPlace</NavLink>
                            <NavLink>Resource</NavLink>
                            <NavLink>About</NavLink>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='hidden sm:flex' >
                            <NavSearch />
                        </div>
                        <div className='hidden xl:flex' >
                            <NavButton />
                        </div>
                        <div className='pt-2 xl:hidden' >
                            {isToggle ? <RxCross1 onClick={toggleHandler} /> : <AiOutlineMenu onClick={toggleHandler} />}
                        </div>
                    </div>

                </div >
                {isToggle && <div className='flex flex-col items-center justify-center w-screen gap-5 pb-3 font-semibold text-center border-b-2 xl:hidden'>
                    <div className='sm:hidden'>
                        <NavSearch />
                    </div>
                    <NavButton />
                    <NavLink >MarketPlace</NavLink>
                    <NavLink>Resource</NavLink>
                    <NavLink>About</NavLink>
                </div>}
            </div>
        </div>

    )
}

export default Navbar