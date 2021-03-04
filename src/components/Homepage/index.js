import React from 'react'

import StoriesBody from '../StoriesBody'

function Homepage() {
  let type = 'topstories'
  return (
        <StoriesBody type={type} />
  );
}

export default Homepage;