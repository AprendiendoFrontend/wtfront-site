import {Repository} from '@s-ui/domain'
export default class PodcastsRepository extends Repository {
  all() {
    throw new Error('[PodcastsRepository#all] mandatory')
  }
}
