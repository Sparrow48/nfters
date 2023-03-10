/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { BIDING_DATA, COLLECTIONS } from '../config'


const Bid = () => {
    const [selectedBid, setBid] = useState({})

    useEffect(() => {
        if (Object.keys(BIDING_DATA)?.length) {
            let hightBid = 0
            let bid = {}
            Object.values(BIDING_DATA).map((item) => {
                if (hightBid < item.bidAmount) {
                    hightBid = item.bidAmount
                    bid = item
                }
            })
            setBid(bid)
        }

    }, [BIDING_DATA])

    return (
        <div className='px-4 py-10 lg:px-48 lg:h-96 lg:mb-40'>
            {/* <div className='grid grid-rows-3 gap-5 lg:grid-rows-1 lg:grid-cols-3 lg:px-16'> */}
            <div className='flex flex-col justify-center gap-10 lg:gap-16 lg:flex-row lg:px-4 2xl:12px'>
                <div className='w-72 h-80'>
                    <img src={selectedBid?.bidImage} alt="" className='w-72 h-80 rounded-xl' />
                    <div className='flex justify-between gap-3 px-1 pt-2'>
                        <div className='flex '>
                            <img src={selectedBid?.profile} className='object-cover w-10 h-10 rounded-full ' alt="" />
                            <div className='pl-2 '>
                                <h4 className='font-bold '>{selectedBid?.name}</h4>
                                <p className='text-xs '>{selectedBid?.stock} in the stock</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-xs '>Highest Bid</p>
                            <div className='flex text-sm'>
                                <p>{selectedBid?.currencyIcon}</p>
                                <p className='text-xs '>{selectedBid?.bidAmount} {selectedBid?.currency}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='pt-16 lg:pt-0'>
                    <div className='flex flex-col gap-5'>
                        {Object.values(BIDING_DATA).map((item) => {
                            const { bidImage, bidAmount, stock, profile, currency, currencyIcon, name } = item
                            return (<div className='flex gap-3'>
                                <img src={bidImage} alt="" className='w-28 h-28 rounded-xl' />

                                <div className='flex flex-col gap-1'>
                                    <h5 className='font-bold '>{name}</h5>
                                    <div className='flex items-center gap-1'>
                                        <img src={profile} className='object-cover rounded-full w-7 h-7 ' alt="" />
                                        <div className='flex p-2 text-sm text-green-500 border border-green-500 rounded-lg'>
                                            <p>{currencyIcon}</p>
                                            <p className='text-xs '>{bidAmount} {currency}</p>
                                        </div>
                                        <p className='text-xs '>1 of {stock}</p>
                                    </div>
                                    <div className='pt-1 text-indigo-800 '>
                                        <button className='px-3 py-2 text-xs border-2 border-indigo-800 rounded-3xl active:bg-indigo-800'>Place a Bid</button>
                                    </div>

                                </div>

                            </div>)
                        })}
                    </div>

                </div>
                <div className='flex flex-col gap-3 lg:gap-5 lg:pl-8 lg:mx-10 lg:border-l'>
                    <div>
                        <h1 className='text-xl font-bold'>Top Collections Over</h1>
                        <p className='font-bold text-indigo-800'>Last 7 days</p>
                    </div>
                    <div >
                        {Object.keys(COLLECTIONS)?.map((key) => {
                            const { profile, name, bidAmount, currencyIcon, percentage } = COLLECTIONS[key]
                            return (
                                <div className='grid grid-cols-[5%_20%_40%_20%] gap-2 p-2 border-b '>
                                    <p className='text-lg font-bold'>{key}</p>
                                    <img src={profile} alt="" className='object-cover rounded-full w-11 h-11 ' />
                                    <div>
                                        <p className='text-base text-bold'>{name}</p>
                                        <div className='flex text-sm'>
                                            <p >{selectedBid?.currencyIcon}</p>
                                            <p className='text-xs '>{bidAmount}</p>
                                        </div>
                                    </div>
                                    <p className='text-xl font-semibold text-green-400'>{percentage}</p>
                                </div>
                            )
                        })}


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Bid