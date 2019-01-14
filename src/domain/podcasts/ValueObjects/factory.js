import ListOfPodcastsValueObject from './ListOfPodcastsValueObject'

import PodcastsEntitiesFactory from '../Entities/factory'

export default class PodcastsValueObjectsFactory {
  static listOfPodcastsValueObject = ({podcasts}) => {
    const podcastsEntities = podcasts.map(PodcastsEntitiesFactory.podcastEntity)

    return new ListOfPodcastsValueObject({
      podcasts: podcastsEntities
    })
  }
}
