import { createActionTypesBySection, createActionPart } from './createAction'
import {
  actionTypesArray,
  people,
  starships,
  planets,
} from '../../constants/storeConstants'

const peopleActionTypes = createActionTypesBySection(actionTypesArray, people)

const planetsActionTypes = createActionTypesBySection(actionTypesArray, planets)

const starshipsActionTypes = createActionTypesBySection(actionTypesArray, starships)

const createActions = createActionPart(true)

const createActionsTypeObject = createActionPart()

export const allActions = {
  [people]: createActions(peopleActionTypes),
  [planets]: createActions(planetsActionTypes),
  [starships]: createActions(starshipsActionTypes),
}

export const allActionsTypes = {
  [people]: createActionsTypeObject(peopleActionTypes),
  [planets]: createActionsTypeObject(planetsActionTypes),
  [starships]: createActionsTypeObject(starshipsActionTypes),
}
