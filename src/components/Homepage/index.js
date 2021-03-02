import './Homepage.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as storiesActions from '../../store/stories';

function Homepage() {
const dispatch = useDispatch()

const [topStories, setTopStories] = useState([]);
const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {
  dispatch(storiesActions.topStoriesSearch())
    .then(() => setIsLoaded(true))
}, [dispatch])


  return isLoaded &&(
    <div className="main-page-container">
      <div className="main-page-center">
        <div className='main-page-header-container'>
          <a href='/'>
            <img src={`../logo.png`} className='main-page-header-logo'/>
          </a>
          <h1>Hacker News</h1>
        </div>
        <div className='main-page-body'>
        <p>
            Hi let's hack some stuff
        </p>
          <ol>
          {topStories.map((story) => {
            <li>{story.title}</li>
          })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Homepage;