import React from 'react'
import './Bookmarks.css'
import Search from '../../Search/Search'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = () => {
  return (
    <div className='bookmarks'>
        <div className="bookmarks-title">
        <h1>Bookmarked Questions</h1>
        </div>
        <div className='search'><Search placeholder="Search in Bookmarks..."/> </div>
        <div className='item'><Bookmark/></div >
        <div className='item'><Bookmark/></div >
        <div className='item'><Bookmark/></div>
        <div className='item'><Bookmark/></div>
        <div className='item'><Bookmark/></div>

       

      
    

    </div>
  )
}

export default Bookmarks
