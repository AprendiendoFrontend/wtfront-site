import PodcastsEntitiesFactory from '../Entities/factory'

import FirebasePodcastsRepository from './FirebasePodcastsRepository'

export default class PodcastsRepositoriesFactory {
  static firebasePodcastsRepository = ({config}) =>
    new FirebasePodcastsRepository({
      config,
      podcastEntityFactory: PodcastsEntitiesFactory.podcastEntity
    })
}
