import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import StoriesBody from '../StoriesBody'
import './Homepage.css';


function Homepage() {
  let type = 'topstories'
  return (
    <div className="main-page-container">
      <div className="main-page-center">
        <Header />
        <StoriesBody type={type} />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;