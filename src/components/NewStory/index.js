import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Footer from '../Footer'
import Header from '../Header'
import StoriesBody from '../StoriesBody'
import '../Homepage/Homepage.css';

import * as storiesActions from '../../store/stories';

function NewStory() {
const dispatch = useDispatch()

const newStories = useSelector(state => state.stories.new);
const [isLoaded, setIsLoaded] = useState(false)
  
useEffect(() => {
  dispatch(storiesActions.storiesSearch('new'))
  .then(() => setIsLoaded(true))
},[dispatch])

  return isLoaded && (
    <div className="main-page-container">
      <div className="main-page-center">
        <Header />
        <StoriesBody stories={newStories} />
        <Footer />
      </div>
    </div>
  );
}

export default NewStory;