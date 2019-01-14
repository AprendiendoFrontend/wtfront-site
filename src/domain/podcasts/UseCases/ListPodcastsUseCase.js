import {UseCase} from '@s-ui/domain'

export default class ListPodcastsUseCase extends UseCase {
  constructor({respository}) {
    super()
    this._respository = respository
  }

  async execute() {
    const listOfPodcastsValueObject = await this._respository.all()
    return listOfPodcastsValueObject.toJSON()
  }
}
