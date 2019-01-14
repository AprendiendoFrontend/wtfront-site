import {Mapper} from '@s-ui/domain'

export default class FromRSSTextToListOfPodcastsValueObject extends Mapper {
  constructor({listOfPodcastsValueObjectFactory, parser}) {
    super()

    this._listOfPodcastsValueObjectFactory = listOfPodcastsValueObjectFactory
    this._parser = parser
  }

  map(rssText) {
    const {rss} = this._parser(rssText)
    const {item: podcasts} = rss.channel
    console.log(podcasts)

    const mappedPodcasts = podcasts.map(podcast => {
      const {
        'itunes:episode': episode,
        'itunes:season': season,
        enclosure,
        title
      } = podcast

      const id = `S${season._text}E${episode._text}`

      return {
        id,
        title: title._cdata,
        url: enclosure._attributes.url
      }
    })

    const listOfPodcastsValueObject = this._listOfPodcastsValueObjectFactory({
      podcasts: mappedPodcasts
    })
    return listOfPodcastsValueObject
  }
}
