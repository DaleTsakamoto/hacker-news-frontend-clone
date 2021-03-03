import React from 'react'

import StoriesBody from '../StoriesBody'
import './Homepage.css';

function Homepage() {
  let type = 'topstories'
  return (
        <StoriesBody type={type} />
  );
}

export default Homepage;