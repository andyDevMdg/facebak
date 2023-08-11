import React from 'react'
import NewPost from './NewPost'
import Post from './Post'
import './feed.css'

function Feed() {
  return (
    <div className='feedContainer'>
      <NewPost/>
      <Post/>
    </div>
  )
}

export default Feed