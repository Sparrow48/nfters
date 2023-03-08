import React from 'react'
import { RxFileText } from 'react-icons/rx';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';



const Description = () => {
    return (
        <div className='bg-gray-100 '>
            <div className='grid items-center gap-8 px-4 py-10 lg:grid-cols-3 lg:h-72 lg:px-48 lg:py-0'>

                <div className=' px:10 lg:pr-20'>
                    <p className='text-4xl font-bold uppercase'>The Amazing Art Of The World Here.</p>
                </div>
                <div className='px-10 '>
                    <div className='flex gap-2 text-xl'>
                        <RxFileText className='text-2xl ' />
                        <h1 className='font-medium '>  Fast Transaction</h1>
                    </div>
                    <p className='pl-8 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, earum.</p>
                </div>
                <div className='px-10 '>
                    <div className='flex gap-2 text-xl'>
                        <BsFileEarmarkBarGraph className='text-2xl ' />
                        <h1 className='text-xl font-medium ' > Growth Transaction</h1>
                    </div>
                    <p className='pl-8 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, earum.</p>

                </div>

            </div>
        </div>
    )
}

export default Description