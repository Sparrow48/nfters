import React, { useEffect, useState } from 'react'
import { NFTS_COLLECTIONS } from '../config'

const Collection = () => {
    const [selectedItem, setSelectedItem] = useState({})

    useEffect(() => {
        let _NFT = {}
        Object.keys(NFTS_COLLECTIONS)?.map((key) => {
            let firstKey = Object.keys(NFTS_COLLECTIONS?.[key]?.collection)[0];
            console.log('firstKey => ', firstKey);
            _NFT[key] = NFTS_COLLECTIONS?.[key]?.collection?.[firstKey]
        })
        setSelectedItem(_NFT)

    }, [])

    console.log(selectedItem);

    const SelectItemHandler = (key, value) => {
        let _NFT = { ...selectedItem }
        _NFT[key] = value
        setSelectedItem(_NFT)

    }
    return (
        <>{Object.keys(selectedItem)?.length &&
            <div className='bg-gray-100 '>

                <div className='w-3/4 px-4 py-10 mx-auto md:w-2/4 lg:w-full xl:px-48'>
                    <div className='pb-5 '>
                        <h1 className='left-0 text-3xl font-bold text-left uppercase lg:text-4xl'>Collection featured nfts</h1>
                        <p className='text-xs '>(Click right side images to see details.)</p>
                    </div>
                    <div>
                        <div className='grid grid-rows-1 lg:grid-cols-[32%_32%_32%] gap-8 justify-center pt-10'>
                            {
                                Object.keys(NFTS_COLLECTIONS)?.map((key) => {
                                    const { collection, item } = NFTS_COLLECTIONS[key]
                                    console.log('loooo', selectedItem?.[key]);
                                    const { image, collection_name, profile, name } = selectedItem?.[key]
                                    return (

                                        <div className='grid grid-cols-[60%_35%]  lg:grid-cols-[60%_30%] gap-5'>
                                            <div className='flex flex-col '>
                                                <img src={image} alt="" className='object-cover w-full h-5/6 rounded-xl' />
                                                <div className='flex flex-col gap-1 pt-3'>
                                                    <h3 className='font-medium text-md xl:text-xl '> {collection_name}</h3>
                                                    <div className='flex gap-3 '>
                                                        <img src={profile} className='object-cover rounded-full w-7 h-7 ' alt="" />
                                                        <p className='font-medium '> <span className='text-xs '>by </span> {name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-around gap-10'>
                                                <div className='flex flex-col items-center justify-center gap-2'>
                                                    {Object.values(collection)?.map((NFT) => {
                                                        return (
                                                            <div >
                                                                <img onClick={() => SelectItemHandler(key, NFT)} src={NFT.image} alt="" className='object-cover w-24 h-24 rounded-xl' />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div >
                                                    <p className='py-1 text-sm text-center text-blue-700 border border-blue-700 rounded-2xl'>total {item} items</p>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                            }
                        </div>

                    </div>
                </div>
            </div>}
        </>
    )
}

export default Collection