import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from "./trending/Trending"
import Popular from './popular/Popular'
import "./style.css"
import TopRated from './topRated/TopRated'
const Home = () => {
  return (
    <div className='homePage'>
      {/* <h1 className="bg">hllo</h1> */}
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
