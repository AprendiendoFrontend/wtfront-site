import PodcastsEntitiesFactory from '../Entities/factory'
import PodcastsMappersFactory from '../Mappers/factory'

import FirebasePodcastsRepository from './FirebasePodcastsRepository'
import RSSPodcastsRepository from './RSSPodcastsRepository'

export default class PodcastsRepositoriesFactory {
  static firebasePodcastsRepository = ({config}) =>
    new FirebasePodcastsRepository({
      config,
      podcastEntityFactory: PodcastsEntitiesFactory.podcastEntity
    })

  static rssPodcastsRepository = ({config}) =>
    new RSSPodcastsRepository({
      config,
      mapper: PodcastsMappersFactory.fromRSSTextToListOfPodcastsValueObject({
        config
      })
    })
}
