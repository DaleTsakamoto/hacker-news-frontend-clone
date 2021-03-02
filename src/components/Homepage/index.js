import './Homepage.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as storiesActions from '../../store/stories';

function Homepage() {
const dispatch = useDispatch()

const topStories = useSelector(state => state.stories.top);
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
            Stories from {new Date().getFullYear}
        </p>
          <ol>
            {Object.values(topStories).map((sto, idx) => {
              return (
                <li key={idx}>{sto.title}</li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Homepage;