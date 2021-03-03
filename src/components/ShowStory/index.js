import React from 'react'

import StoriesBody from '../StoriesBody'
import '../Homepage/Homepage.css';

function ShowStory() {
  let type = 'showstories'
  return (
    <StoriesBody type={type} />
);
}

export default ShowStory;