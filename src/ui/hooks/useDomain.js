import {useState} from 'react'
import wtfront from '../../domain'

export default function useDomain(useCaseName) {
  const [response, setResponse] = useState({
    loading: false,
    data: null,
    error: null
  })

  const useCase = function(paramsUseCase) {
    setResponse({loading: true, data: null, error: null})

    wtfront
      .get(useCaseName)
      .execute(paramsUseCase)
      .then(data => {
        setResponse({loading: false, data, error: null})
      })
      .catch(error => {
        setResponse({loading: false, data: null, error})
      })
  }

  return [response, useCase]
}
