import React from 'react'

import './StoriesBody.css';

function StoriesBody({ stories }) {

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
          let date;
          if (dif / (1000 * 60) < 60) {
            date = Math.floor(dif / (1000 * 60))
            date = date === 1 ? `${date} minute` : `${date} minutes`
          } else if (dif / (1000 * 3600) < 24){
            date = Math.floor(dif / (1000 * 3600))
            date = date === 1 ? `${date} hour` : `${date} hours`
          } else {
            date = Math.floor(dif / (1000 * 86400))
            date = date === 1 ? `${date} day` : `${date} days`
          }
          let showUrl = ''
          if (sto.url) {
              showUrl = sto.url.split('/')[2]
            if (sto.url.includes('www')) {
              showUrl = showUrl.slice(4)
              }
          }
          return (
            <div key={idx}>
              <div className='stories-ind-title'>
                <li>
                  <div onClick={noDatabase} className='stories-ind-triangle'></div>
                  <a href={sto.url}>{sto.title}</a>
                </li>
                <a href={sto.url}>{showUrl ? `(${showUrl})` : ''}</a>
              </div>
              <div className='stories-ind-story-stats'>
                <p className='stories-ind-story-score'> {sto.score === 1 ? `${sto.score} point` : `${sto.score} points`} by {sto.by} {date} ago <a onClick={hide} className='stories-ind-hide'> hide</a> <span onClick={noDatabase} className='stories-ind-comments'> {sto.kids ? sto.kids.length : 0} comments</span></p>  
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