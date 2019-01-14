import PodcastsRepository from './PodcastsRepository'

export default class RSSPodcastsRepository extends PodcastsRepository {
  constructor({config, mapper}) {
    super()
    this._config = config
    this._mapper = mapper
  }

  async all() {
    const feedUrl = this._config.get('FEED_URL')
    const response = await window.fetch(feedUrl)
    const responseText = await response.text()
    return this._mapper.map(responseText)
  }
}
