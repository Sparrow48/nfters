import React from 'react'
import Intro from '../components/Intro'
import Description from '../components/Description'
import Bid from '../components/Bid'
import Collection from '../components/Collection'

const Home = () => {
    return (
        <div>

            <div className='flex flex-col items-center justify-center'>
                <Intro />
                <Description />
                <Bid />
            </div>
            <Collection />
        </div>
    )
}

export default Home