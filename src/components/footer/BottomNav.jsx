import React from 'react'
import { NavLink } from 'react-router-dom'
import { MARKET_PLACED, MY_ACCOUNT, SOCIAL_ACCOUNT } from '../../config'

const BottomNav = () => {
    return (
        <div className='flex flex-col items-start justify-between gap-10 px-4 lg:mx-auto lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-7 lg:px-24'>
            <div className=' lg:pr-8'>
                <h1 className='pb-3 text-2xl font-bold xl:pb-6' >NFTERS</h1>
                <p className='text-justify text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti deleniti quidem eius iusto dolores cupiditate impedit recusandae temporibus inventore.</p>
                <div className='flex flex-row gap-5 pt-3 text-3xl xl:pt-5 xl:text-4xl'>

                    {Object.keys(SOCIAL_ACCOUNT).map((key) => {
                        console.log(key);
                        return (<NavLink to={`${SOCIAL_ACCOUNT[key]?.link}`} target="_blank" className={SOCIAL_ACCOUNT[key]?.className} key={SOCIAL_ACCOUNT[key]?.link} >{SOCIAL_ACCOUNT[key]?.label}</NavLink>)
                    })}
                </div>
            </div>
            <div className='flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-0 lg:justify-around'>
                <div className='flex flex-col '>
                    <h1 className='pb-3 text-xl font-medium xl:pb-6'>Market Place</h1>
                    {Object.keys(MARKET_PLACED).map((key) => {
                        return (<NavLink to={`/${key}`} key={key} className='pl-2 leading-7 text-gray-600'>{MARKET_PLACED[key]}</NavLink>)
                    })}
                </div>
                <div className='flex flex-col '>
                    <h1 className='pb-3 text-xl font-medium xl:pb-6'>My Account</h1>
                    {Object.keys(MY_ACCOUNT).map((key) => {
                        return (<NavLink to={`/${key}`} key={key} className='pl-2 leading-7 text-gray-600'>{MY_ACCOUNT[key]}</NavLink>)
                    })}
                </div>
            </div>
            <div className=' lg:pl-8'>
                <h1 className='pb-3 text-xl font-medium xl:pb-6'>Stay in the Loop</h1>
                <p className='text-justify text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos nesciunt laudantium quia numquam velit nihil explicabo distinctio quidem ut.</p>
            </div>
        </div>
    )
}

export default BottomNav