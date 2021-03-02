import './Homepage.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as storiesActions from '../../store/stories';

function Homepage() {
const dispatch = useDispatch()

const topStories = useSelector(state => state.stories.top);
// const [topStories, setTopStories] = useState({})
const [isLoaded, setIsLoaded] = useState(false)

const noDatabase = () => {
  alert("I need a database, a database.  My kingdom for a database!")
}
  
const hide = () => {
  alert("What are you trying to hide?")
}

  const random = () => {
  return Math.floor(Math.random() * (Math.floor(200) - Math.ceil(1)) + Math.ceil(1))
}
  
useEffect(() => {
  dispatch(storiesActions.topStoriesSearch())
  .then(() => setIsLoaded(true))
},[dispatch])

  return isLoaded && (
    <div className="main-page-container">
      <div className="main-page-center">
        <div className='main-page-header-container'>
          <a href='/'>
            <img src={`../logo.png`} className='main-page-header-logo' alt='hacker-logo'/>
          </a>
          <h1>Hacker News</h1>
          <a className='main-page-header-subtitles' href='/new'>new</a>
          <a className='main-page-header-subtitles' href='/past'>past</a>
          <a className='main-page-header-subtitles' href='/comments'>comments</a>
          <a className='main-page-header-subtitles' href='/ask'>ask</a>
          <a className='main-page-header-subtitles' href='/show'>show</a>
          <a className='main-page-header-subtitles' href='/jobs'>jobs</a>
          <a className='main-page-header-subtitles-no-line' href='/submit'>submit</a>
          <a id='main-page-header-login' href='/login'>login</a>
        </div>
        <div className='main-page-body'>
          <ol className='main-page-list-container'>
            {Object.values(topStories).map((sto, idx) => {
              // let currentTime = Date.now()
              // let ms = (currentTime - sto.time)
              let dif = Math.abs(new Date(sto.time * 1000) - (Date.now()))
              let date = Math.round(dif/(1000 * 3600))
              let showUrl = ''
              if (sto.url) {
                if (sto.url.includes('www')) {
                  showUrl = sto.url.split('.')[1]
                }
                showUrl = sto.url.split('/')[2]
              }
              return (
                <div key={idx}>
                  <div className='main-page-ind-title'>
                    <li>
                      <div onClick={noDatabase} className='main-page-ind-triangle'></div>
                      <a href={sto.url}>{sto.title}</a>
                    </li>
                    <a href={sto.url}>({showUrl})</a>
                  </div>
                  <div className='main-page-ind-story-stats'>
                    <p className='main-page-ind-story-score'> {sto.score} points by {sto.by} {date} {date > 1 ? 'hours' : 'hour'} ago <a onClick={hide} className='main-page-ind-hide'> hide</a> <span onClick={noDatabase} className='main-page-ind-comments'>{random()} comments</span></p>  
                  </div>
                </div>
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