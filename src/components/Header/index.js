import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({noDatabase}) {
  const comments = () => {
    alert("Sorry no comments until they give me an API that can query more than one at a time")
  }

  const past = () => {
    alert("Let's forget about the past and look to the future")
  }

  const job = () => {
    alert("I would be the perfect fit for this job, and think about all the jokes you'd get every day")
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
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/jobs' onClick={job}>jobs</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink activeClassName="header-subtitles__selected" className='header-subtitles' to='/submit' onClick={noDatabase}>submit</NavLink>
      <div className='header-subtitles-line'> |</div>
      <NavLink id='header-login' to='/login' onClick={noDatabase}>login</NavLink>
    </div>
  )
}

export default Header