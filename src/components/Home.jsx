import React from 'react'
import concert from '../img/concert.jpg' 
const Home = () => {
    return (
        <div className="md:ml-60 h-screen w-screen">
            <img src={concert} alt="concert" className="h-full w-full object-cover"/>
        </div>
    )
}

export default Home
