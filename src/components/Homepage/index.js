import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Footer from '../Footer'
import Header from '../Header'
import StoriesBody from '../StoriesBody'
import './Homepage.css';

import * as storiesActions from '../../store/stories';

function Homepage() {
const dispatch = useDispatch()

const topStories = useSelector(state => state.stories.top);
const [isLoaded, setIsLoaded] = useState(false)
  
useEffect(() => {
  dispatch(storiesActions.topStoriesSearch())
  .then(() => setIsLoaded(true))
},[dispatch])

  return isLoaded && (
    <div className="main-page-container">
      <div className="main-page-center">
        <Header />
        <StoriesBody stories={topStories} />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;