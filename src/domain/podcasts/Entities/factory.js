import PodcastEntity from './PodcastEntity'

export default class PodcastsEntitiesFactory {
  static podcastEntity = podcast => new PodcastEntity(podcast)
}
