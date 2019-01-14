import React, {useEffect} from 'react'
import useDomain from './hooks/useDomain'

export default function() {
  const [response, executeUseCase] = useDomain('list_podcasts_use_case')

  const {loading, data, error} = response

  useEffect(executeUseCase, [])

  return (
    <React.Fragment>
      <img src="https://res.cloudinary.com/midudev/image/upload/v1547288127/logo_wtf.png" />
      {loading && <p>Espera por favor... 🤗</p>}
      {error && <p>Algo ha pasado! 🙁</p>}
      {data &&
        data.podcasts.map(podcast => (
          <div key={podcast.id}>
            <h3>{podcast.title}</h3>
            <audio controls src={podcast.url} />
          </div>
        ))}
    </React.Fragment>
  )
}
