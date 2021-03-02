import './Homepage.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as storiesActions from '../../store/stories';

function Homepage() {
const dispatch = useDispatch()

const topStories = useSelector(state => state.stories.top);
// const [topStories, setTopStories] = useState({})
const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {
  dispatch(storiesActions.topStoriesSearch())
    // .then((res) => {
    //   setTopStories(res)
    // })
  .then(() => setIsLoaded(true))
},[dispatch])

  return isLoaded && topStories &&(
    <div className="main-page-container">
      {/* {console.log(topStories)} */}
      <div className="main-page-center">
        <div className='main-page-header-container'>
          <a href='/'>
            <img src={`../logo.png`} className='main-page-header-logo'/>
          </a>
          <h1>Hacker News</h1>
        </div>
        <div className='main-page-body'>
          <ol className='main-page-list-container'>
            {Object.values(topStories).map((sto, idx) => {
              // let currentTime = Date.now()
              // let ms = (currentTime - sto.time)
              let date = new Date(sto.time * 1000).toString()
              return (
                <>
                  <li key={idx}>{sto.title}</li>
                  <div className='main-page-ind-story-stats'>
                    <p className='main-page-ind-story-score'> {sto.score} points by {sto.by} {date}</p>  
                  </div>
                </>
              )
            })
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Homepage;