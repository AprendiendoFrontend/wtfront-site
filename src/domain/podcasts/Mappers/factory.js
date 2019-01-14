import FromRSSTextToListOfPodcastsValueObject from './fromRssTextToListOfPodcastsValueObject'

import PodcastsValueObjectsFactory from '../ValueObjects/factory'

import {xml2js} from 'xml-js'
const parser = xml => xml2js(xml, {compact: true})

export default class PodcastsMappersFactory {
  static fromRSSTextToListOfPodcastsValueObject = ({podcasts}) =>
    new FromRSSTextToListOfPodcastsValueObject({
      parser,
      listOfPodcastsValueObjectFactory:
        PodcastsValueObjectsFactory.listOfPodcastsValueObject
    })
}
