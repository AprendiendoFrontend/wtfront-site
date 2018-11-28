import PodcastsRepository from './PodcastsRepository'

export default class FirebasePodcastsRepository extends PodcastsRepository {
  constructor({config, podcastEntityFactory}) {
    super()
    this._config = config
    this._podcastEntityFactory = podcastEntityFactory
  }

  async all() {
    const db = this._config.get('firebaseDB')
    const podcastsSnapshot = await db.collection('podcasts').get()
    let podcasts = []
    podcastsSnapshot.forEach(doc =>
      podcasts.push(this._podcastEntityFactory(doc.data()))
    )

    return podcasts
  }
}
