import React, { useState } from 'react'

import './Footer.css';

function Footer() {
  const [search, setSearch] = useState('')

  const info = () => {
    alert('You should probably check the actual site for this information')
  }

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`${search} are not the droids you're looking for`)
    setSearch('')
  };
  
  return (
    <div className='footer-container'>
      <h2>Applications are viewable at my <a className='footer-h2-site' href='https://daletsakamoto.github.io/'>site</a> 2021</h2>
      <p onClick={info}>Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact</p>
      <div className='signup-special-container'>
        <form onSubmit={handleSearch}>
        <label>
          Search: 
          <input
          className='signup-special-input__1'
          value={search}
          type='text'
          onChange={ e => setSearch(e.target.value) }
          required
          />
        </label>
        <input className='tasks__hidden-submit' type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Footer;