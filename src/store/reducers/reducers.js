import { combineReducers } from 'redux'
import { createInitialState, createPageReducer } from './createReducer'
import { people, planets, starships } from '../../constants/storeConstants'

const peopleInitialState = createInitialState(people)
const peopleReducer = createPageReducer(people, peopleInitialState)

const planetsInitialState = createInitialState(planets)
const planetsReducer = createPageReducer(planets, planetsInitialState)

const starshipsInitialState = createInitialState(starships)
const starshipsReducer = createPageReducer(starships, starshipsInitialState)

export const rootReducer = combineReducers(
  {
    [people]: peopleReducer,
    [planets]: planetsReducer,
    [starships]: starshipsReducer,
  },
)
