import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Footer from '../Footer'
import Header from '../Header'
import './Homepage.css';

import * as storiesActions from '../../store/stories';

function Homepage() {
const dispatch = useDispatch()

const topStories = useSelector(state => state.stories.top);
const [isLoaded, setIsLoaded] = useState(false)

const noDatabase = () => {
  alert("I need a database, a database.  My kingdom for a database!")
}
  
const hide = () => {
  alert("What are you trying to hide?")
}
  
useEffect(() => {
  dispatch(storiesActions.topStoriesSearch())
  .then(() => setIsLoaded(true))
},[dispatch])

  return isLoaded && (
    <div className="main-page-container">
      <div className="main-page-center">
        <Header />
        <div className='main-page-body'>
          <ol className='main-page-list-container'>
            {Object.values(topStories).map((sto, idx) => {
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
                    <p className='main-page-ind-story-score'> {sto.score} points by {sto.by} {date} {date > 1 ? 'hours' : 'hour'} ago <a onClick={hide} className='main-page-ind-hide'> hide</a> <span onClick={noDatabase} className='main-page-ind-comments'> {sto.kids ? sto.kids.length : 0} comments</span></p>  
                  </div>
                </div>
            
              )
            })
            }
          </ol>
          <p className='main-page-more'> More </p>
        </div>
      <Footer />
      </div>
      </div>
  );
}

export default Homepage;