import React from 'react'
import Intro from '../components/Intro'
import Description from '../components/Description'
import Bid from '../components/Bid'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Intro />
            <Description />
            <Bid />
        </div>
    )
}

export default Home