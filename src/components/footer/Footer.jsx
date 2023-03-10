import React from 'react'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='border-t-2 '>
            <div className='flex items-center justify-center px-4 py-3 lg:max-w-8xl 2xl:max-w-9xl lg:px-32'>
                Copyright &copy; {year}&nbsp; <a href='https://nasib.vercel.app/' className='text-blue-800 ' target={'_blank'} rel="noopener noreferrer nofollow"> Nasib</a>.
            </div>
        </div>
    )
}

export default Footer