import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom';

import './StoriesBody.css';
import Footer from '../Footer'
import Header from '../Header'
import * as storiesActions from '../../store/stories';

function StoriesBody({ type }) {
const scrollTop = useRef(null)
const dispatch = useDispatch()
const stories = useSelector(state => state.stories.stories);
const [isLoaded, setIsLoaded] = useState(false)
const [cycle, setCycle] = useState(0)
  
  useEffect(() => {
    dispatch(storiesActions.storiesSearch(type, cycle))
      .then(() => {
        if (document.querySelector(".stories-list-container")) {
          document.querySelector(".stories-list-container").style.counterReset = `count ${(cycle)* 30}`
      }
    })
    .then(() => setIsLoaded(true))
},[dispatch, cycle])

const noDatabase = () => {
  alert("I need a database, a database.  My kingdom for a database!")
}
  
const hide = () => {
  alert("What are you trying to hide?")
}
  return isLoaded && (
    <div className="stories-container">
      <div ref={scrollTop} id='hide-me'></div>
      <div className="stories-center">
      <Header />
    <div className='stories-body'>
      <ol className='stories-list-container'>
        {Object.values(stories).map((sto, idx) => {
          let dif = Math.abs(new Date(sto.time * 1000) - (Date.now()))
          let date;
          if (dif / (1000 * 60) < 60) {
            date = Math.floor(dif / (1000 * 60))
            date = date === 1 ? `${date} minute` : `${date} minutes`
          } else if (dif / (1000 * 3600) < 24){
            date = Math.floor(dif / (1000 * 3600))
            date = date === 1 ? `${date} hour` : `${date} hours`
          } else {
            date = Math.floor(dif / (1000 * 86400))
            date = date === 1 ? `${date} day` : `${date} days`
          }
          let showUrl = ''
          if (sto.url) {
              showUrl = sto.url.split('/')[2]
            if (sto.url.includes('www')) {
              showUrl = showUrl.slice(4)
              }
          }
          return (
            <div key={idx}>
              <div className='stories-ind-title'>
                <li>
                  <div onClick={noDatabase} className='stories-ind-triangle'></div>
                  <a href={sto.url}>{sto.title}</a>
                </li>
                <a href={sto.url}>{showUrl ? `(${showUrl})` : ''}</a>
              </div>
              <div className='stories-ind-story-stats'>
                <p className='stories-ind-story-score'> {sto.score === 1 ? `${sto.score} point` : `${sto.score} points`} by {sto.by} {date} ago <a onClick={hide} className='stories-ind-hide'> hide</a> <span onClick={noDatabase} className='stories-ind-comments'> {sto.kids ? sto.kids.length : 0} {sto.kids && sto.kids.length === 1 ? 'comment' : 'comments'}</span></p>  
              </div>
            </div>
        
          )
        })
        }
      </ol>
      <div className='stories-more' onClick={() => {
            setCycle(cycle + 1)
            scrollTop.current.scrollIntoView()
          }}>More</div>
        </div>
        <Footer />
        </div>
    </div>
  );
}

export default StoriesBody;