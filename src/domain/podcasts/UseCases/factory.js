import Pepito from '../Repositories/factory'

import ListPodcastsUseCase from './ListPodcastsUseCase'

export default class PodcastsUseCasesFactory {
  static listPodcastsUseCase = ({config}) =>
    new ListPodcastsUseCase({
      respository: Pepito.firebasePodcastsRepository({config})
    })
}
