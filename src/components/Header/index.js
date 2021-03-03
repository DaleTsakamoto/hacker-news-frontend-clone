import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      <a href='/'>
        <img src={`../logo.png`} className='header-logo' alt='hacker-logo' />
      </a>
      <h1>Hacker News</h1>
      <a className='header-subtitles' href='/newest'>new</a>
      <a className='header-subtitles' href='/front'>past</a>
      <a className='header-subtitles' href='/comments'>comments</a>
      <a className='header-subtitles' href='/ask'>ask</a>
      <a className='header-subtitles' href='/show'>show</a>
      <a className='header-subtitles' href='/jobs'>jobs</a>
      <a className='header-subtitles-no-line' href='/submit'>submit</a>
      <a id='header-login' href='/login'>login</a>
    </div>
  )
}

export default Header