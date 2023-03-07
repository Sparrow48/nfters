import React from 'react'

const NavButton = () => {
    return (
        <div className='flex gap-5 '>
            <button className='h-10 px-5 border-2 border-indigo-700 rounded-3xl active:rounded-3xl active:bg-indigo-700'>Upload</button>
            <button className='h-10 px-5 border-2 border-indigo-700 rounded-3xl active:rounded-3xl active:bg-indigo-700'>Connect Wallet</button>
        </div>
    )
}

export default NavButton