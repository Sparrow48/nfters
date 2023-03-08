import React from 'react'
import nfts1 from './../assets/NFTS1.png'
import nfts2 from './../assets/NFTS2.png'
import Profile from './../assets/man.png'

const Intro = () => {
    return (
        <div>
            <div className='flex flex-col px-4 mx-auto my-10 lg:px-32 lg:grid lg:grid-cols-2 lg:gap-20 '>
                <div className='w-3/4 pb-24 ml-48 lg:pb-0 lg:order-2'>
                    <div className='container relative bg-white w-72 h-72'>
                        <img src={nfts1} alt="" className='absolute top-0 w-full h-72 right-30 rounded-xl' />
                        <img src={nfts2} alt="" className='absolute top-0 w-full h-full right-10 rounded-xl' />
                        <img src={nfts1} alt="" className='absolute top-0 w-full h-full right-20 rounded-xl' />

                        <div className='absolute p-3 mx-5 text-white rounded-lg top-5 -left-16'>
                            <div className='flex gap-5'>

                                <div className='flex flex-col'>
                                    <h5 className='text-xl font-semibold'>Abstr Gradient NFT </h5>
                                    <div className='flex gap-2'>
                                        <img src={Profile} height='40' width='25' className='rounded-full ' alt="" />
                                        <h5>ArKhan17</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute p-3 mx-5 text-white bg-blue-300 rounded-lg bottom-5 -left-16'>
                            <div className='flex gap-5'>

                                <div className='flex flex-col'>
                                    <h5 className='text-xs '>Current Bit</h5>
                                    <h5>0.25 ETH</h5>
                                </div>
                                <div className='flex flex-col'>
                                    <h5 className='text-xs' >Ends in </h5>
                                    <h5>12h 43m 42s</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-4 gap-7'>
                    <h1 className='text-6xl font-bold uppercase'>Discover, And Collect Digital Art Nfts</h1>
                    <p className='w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum velit, nihil sapiente accusamus unde repellat quam, eos et rem mollitia amet, vel eveniet cupiditate.</p>
                    <div>
                        <button className='px-5 py-3 bg-indigo-600 active:bg-indigo-800 rounded-3xl'>Explore Now</button>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h1 className='text-4xl font-bold '>98K+</h1>
                            <p>ArtWork</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold '>12K+</h1>
                            <p>Auction</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold '>15K+</h1>
                            <p>Artist</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Intro