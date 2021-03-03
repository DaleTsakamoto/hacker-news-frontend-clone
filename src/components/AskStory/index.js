import React from 'react'

import StoriesBody from '../StoriesBody'
import '../Homepage/Homepage.css';

function AskStory() {
  let type = 'askstories'
  return (
    <StoriesBody type={type} />
);
}

export default AskStory;