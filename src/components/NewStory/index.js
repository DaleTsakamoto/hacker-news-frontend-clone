import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import StoriesBody from '../StoriesBody'
import '../Homepage/Homepage.css';

function NewStory() {
  let type = 'newstories'
  return (
    <StoriesBody type={type} />
);
}

export default NewStory;