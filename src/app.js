import React from 'react'
import ReactDOM from 'react-dom'

import wtfront from './domain'
;(async () => {
  const podcasts = await wtfront.get('list_podcasts_use_case').execute()
  ReactDOM.render(
    <React.Fragment>
      <h1>WTFront</h1>
      {podcasts.map(podcast => (
        <div>
          <h3>{podcast.title}</h3>
          <audio controls key={podcast.id} src={podcast.url} />
        </div>
      ))}
    </React.Fragment>,
    document.getElementById('⚛️')
  )
})()
