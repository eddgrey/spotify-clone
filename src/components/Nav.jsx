import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
    const listElement = "mb-3 text-sm font-thin"
    return (
        <nav className="flex flex-row md:flex-col bg-blueGray-900 text-white pt-4 md:pt-10 pb-24 px-6 h-24 w-screen md:h-screen md:w-60 fixed top-0 left-0 md:bottom-0">
            <div className="container">
                <div className="container flex flex-row justify-between mb-4">
                    <span>
                        <Link to="/" className="border-2 rounded-full h-12 w-12 flex items-center justify-center">
                            <i className="fas fa-home fa-lg"/>
                        </Link>
                        <p className="mt-2">Home</p>
                    </span>
                    <span>
                        <Link to="/search" className="border-2 rounded-full h-12 w-12 flex items-center justify-center">
                            <i className="fas fa-satellite-dish fa-lg"></i>
                        </Link>
                        <p className="mt-2">Search</p>
                    </span>
                    <span>
                        <Link to="/favourite" className="border-2 rounded-full h-12 w-12 flex items-center justify-center">
                            <i className="far fa-heart fa-lg"></i>
                        </Link>
                        <p className="mt-2">Liked</p>
                    </span>
                </div>
            </div>
            <div className="hidden md:flex-col md:flex">
                    <span className="border border-transparent mt-4 rounded-full px-2 text-center w-full py-2 text-black bg-gradient-to-r from-blue-500 to-green-500">Made For You</span>
                <ul>
                    <h3 className="uppercase text-blueGray-500 font-extralight mb-4 mt-6">Your Library</h3>
                    <li className="mb-3 text-sm font-thin">Recently Played</li>
                    <li className={listElement}>Podcast</li>
                    <li className={listElement}>Stations</li>
                </ul>

                <ul>
                    <h3 className="uppercase text-blueGray-500 font-light mb-4 mt-6">Playlist</h3>
                    <li className={listElement}>Recently Played</li>
                    <li className={listElement}>Trending</li>
                    <li className={listElement}>90's popular</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
