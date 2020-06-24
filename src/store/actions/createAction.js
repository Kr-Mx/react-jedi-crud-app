import { capitalize } from '../../helpers'

const createAction = (type) => (args) => ({ type, payload: { ...args } })

const transformActionName = (actionType) => (actionType
  .toLowerCase()
  .split('_')
  .filter((word, index) => index !== 0)
  .map((word, index) => ((index) ? capitalize(word) : word))
  .join(''))

export const createActionTypesBySection = (actionTypesArr, name) => (
  actionTypesArr.map((actionType) => (`${name.toUpperCase()}_${actionType}`))
)

export const createActionPart = (isActionCreator) => (actionTypes) => {
  const actionPart = {}
  actionTypes.forEach((actionType) => {
    const actionName = transformActionName(actionType)
    if (isActionCreator) {
      actionPart[actionName] = createAction(actionType)
    } else actionPart[actionName] = actionType
  })
  return actionPart
}
