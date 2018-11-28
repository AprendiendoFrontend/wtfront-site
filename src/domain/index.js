import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {EntryPointFactory} from '@s-ui/domain'
import Config from './config'

import PodcastsUseCasesFactory from './podcasts/UseCases/factory'

const config = new Config()
const useCases = {
  list_podcasts_use_case: PodcastsUseCasesFactory.listPodcastsUseCase({config})
}

const Domain = EntryPointFactory({useCases})
const instance = new Domain({config})
const fb = firebase.initializeApp({
  apiKey: 'AIzaSyB5dBSkZCCw6BJ8WP7g4QGh0e0nUWan5_8',
  authDomain: 'wtfront-8f08a.firebaseapp.com',
  databaseURL: 'https://wtfront-8f08a.firebaseio.com',
  projectId: 'wtfront-8f08a',
  storageBucket: 'wtfront-8f08a.appspot.com',
  messagingSenderId: '565654881770'
})

const firebaseDB = fb.firestore()
firebaseDB.settings({
  timestampsInSnapshots: true
})

instance.config('firebaseDB', firebaseDB)

export default instance
