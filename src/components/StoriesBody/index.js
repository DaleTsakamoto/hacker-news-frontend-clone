import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './StoriesBody.css';

import * as storiesActions from '../../store/stories';

function StoriesBody({stories}) {

const noDatabase = () => {
  alert("I need a database, a database.  My kingdom for a database!")
}
  
const hide = () => {
  alert("What are you trying to hide?")
}
  return (
        <div className='stories-body'>
          <ol className='stories-list-container'>
            {Object.values(stories).map((sto, idx) => {
              let dif = Math.abs(new Date(sto.time * 1000) - (Date.now()))
              let date = Math.round(dif/(1000 * 3600))
              let showUrl = ''
              if (sto.url) {
                if (sto.url.includes('www')) {
                  showUrl = sto.url.split('.')[1]
                }
                showUrl = sto.url.split('/')[2]
              }
              return (
                <div key={idx}>
                  <div className='stories-ind-title'>
                    <li>
                      <div onClick={noDatabase} className='stories-ind-triangle'></div>
                      <a href={sto.url}>{sto.title}</a>
                    </li>
                    <a href={sto.url}>({showUrl})</a>
                  </div>
                  <div className='stories-ind-story-stats'>
                    <p className='stories-ind-story-score'> {sto.score} points by {sto.by} {date} {date > 1 ? 'hours' : 'hour'} ago <a onClick={hide} className='stories-ind-hide'> hide</a> <span onClick={noDatabase} className='stories-ind-comments'> {sto.kids ? sto.kids.length : 0} comments</span></p>  
                  </div>
                </div>
            
              )
            })
            }
          </ol>
          <p className='stories-more'> More </p>
        </div>
  );
}

export default StoriesBody;