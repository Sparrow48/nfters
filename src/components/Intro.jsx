import React from 'react'
import nfts1 from './../assets/NFTS1.png'
import nfts2 from './../assets/NFTS2.png'
import Profile from './../assets/man.png'

const effect = 'transition ease-in-out delay-150 bg-blue-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-indigo-500 duration-300'
// const takeup = 'z-40'

const Intro = () => {
    return (
        <div>
            <div className='flex flex-col px-4 mx-auto my-10 lg:px-48 lg:grid lg:grid-cols-2 lg:gap-20 '>
                <div className='pb-24 ml-20 lg:ml-48 lg:pb-0 lg:order-2'>
                    <div className='container relative w-64 h-64 bg-white md:w-80 lg:w-96 md:80 lg:h-96'>

                        <div className=' group'>

                            <img src={nfts1} alt="" className={`absolute top-0 w-full h-full scale-75 right-30 rounded-xl translate-x-2 group-hover:z-30 ${effect}`} />
                            {/* <img src={nfts1} alt="" className={`absolute top-0 w-full h-72 right-30 rounded-xl group-hover:z-30 ${effect}`} /> */}

                            <div className='absolute p-3 mx-5 text-white rounded-lg group-hover:z-30 top-5 -left-2'>
                                <div className='flex gap-5'>

                                    <div className='flex flex-col'>
                                        <h5 className='text-xl font-semibold'>Abstr Gradient NFT </h5>
                                        <div className='flex gap-2'>
                                            <img src={Profile} height='25' width='25' className='rounded-full ' alt="" />
                                            <h5>ArKhan17</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='absolute w-4/6 p-3 mx-5 text-white translate-x-2 bg-blue-300 rounded-lg group-hover:w-5/6 group-hover:z-30 bottom-5'>
                                <div className='flex justify-between gap-5'>

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
                        <div className=' group'>
                            {/* <img src={nfts2} alt="" className={`absolute top-0 w-full h-full right-10 rounded-xl group-hover:z-20 ${effect}`} /> */}
                            <img src={nfts2} alt="" className={`absolute top-0 w-full h-full scale-90 right-30 -translate-x-10 rounded-xl group-hover:z-20 ${effect}`} />
                            <div className='absolute p-3 mx-5 text-white rounded-lg group-hover:z-20 top-5 -left-10'>
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

                            <div className='absolute w-4/6 p-3 mx-5 text-white -translate-x-8 bg-blue-300 rounded-lg group-hover:w-5/6 group-hover:z-20 bottom-5'>
                                <div className='flex justify-between gap-5'>

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
                        <div className='group'>

                            {/* <img src={nfts1} alt="" className={`absolute top-0 w-full h-full right-20 rounded-xl ${effect} z-10`} /> */}

                            <img src={nfts1} alt="" className={`absolute top-0 w-full h-full right-30 -translate-x-20 rounded-xl  ${effect}`} />

                            <div className='absolute z-10 p-3 mx-5 text-white rounded-lg top-5 -left-16'>
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

                            <div className='absolute z-10 w-5/6 p-3 mx-5 text-white -translate-x-16 bg-blue-300 rounded-lg bottom-5'>
                                <div className='flex justify-between gap-5'>

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