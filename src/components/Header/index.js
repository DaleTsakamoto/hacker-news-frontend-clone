import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const comments = () => {
    alert("Sorry no comments until they give me an API that can query more than one at a time")
  }

  const past = () => {
    alert("Let's forget about the past and look to the future")
  }

  return (
    <div className='header-container'>
      <a href='/'>
        <img src={`../logo.png`} className='header-logo' alt='hacker-logo' />
      </a>
      <h1>Hacker News</h1>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/newest'>new</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/front' onClick={past}>past</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/newcomments' onClick={comments}>comments</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/ask'>ask</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/show'>show</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/jobs'>jobs</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/submit'>submit</NavLink>
      <div className='header-subtitles-line'> |</div>
      <a id='header-login' href='/login'>login</a>
    </div>
  )
}

export default Header