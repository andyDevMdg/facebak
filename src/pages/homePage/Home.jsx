import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'


// Home Page which contains the basic components

function Home() {
  return (
    <div>
        <Navbar/>
        <Feed/>
        <Leftbar/>
        <Rightbar/>
    </div>
  )
}

export default Home