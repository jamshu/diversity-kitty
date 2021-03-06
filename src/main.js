require('babel/polyfill')

import * as observables from './observables'
import AppContainer from './containers/app/AppContainer'
import React from 'react'
import Router from './utils/Router'
import createStore from './utils/createStore'
import observableFromStore from './utils/observableFromStore'
import routes from './routes'
import {addInfoMessage} from './actions/messageActions'
import {resetProject, getProjects, getProject} from './actions/projectActions'
import {updateLocation} from './actions/locationActions'

const store = createStore(window.INITIAL_STATE)
const store$ = observableFromStore(store)

const router = new Router(routes)
const location$ = router.createLocationObservable()
router.start()

observables.didNavigateHome(store$)
  .subscribe(() => {
    store.dispatch(resetProject())
    store.dispatch(getProjects())
  })

observables.didNavigateUnCachedProjectRoute(store$)
  .subscribe(state => {
    store.dispatch(getProject(state.location.params.projectId))
  })

observables.didCreateProject(store$)
  .subscribe(projectId => {
    store.dispatch(addInfoMessage('Project created'))
    router.transitionTo('project', {projectId})
  })

location$
  .subscribe(location => store.dispatch(updateLocation(location)))

React.render(
  <AppContainer store={store} router={router}/>,
  document.getElementById('app')
)
