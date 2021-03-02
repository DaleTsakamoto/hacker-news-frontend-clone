import './Homepage.css';
import React, { useState, useEffect } from 'react'

const [topStories, setTopStories] = useState([]);

useEffect(() => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then((res) => {
      for (let storyId of res) {
        const fullStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        .then((fullStory) => setTopStories([...topStories, fullStory]))
      }
    })
}, [dispatch])

function Homepage() {
  return (
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
        </div>
      </div>
    </div>
  );
}

export default Homepage;