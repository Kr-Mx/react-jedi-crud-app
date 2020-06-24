import { allActionsTypes } from '../actions'

export const createInitialState = (sectionName) => (
  {
    data: JSON.parse(localStorage.getItem(`${sectionName}`)) || [],
    pending: false,
    error: false,
  }
)

export const createPageReducer = (sectionName, initialState) => {
  const actionTypeObject = allActionsTypes[sectionName]
  return (
    (state = initialState, { type, payload }) => {
      switch (type) {
        case `${actionTypeObject.deleteRow}`:
          return {
            ...state,
            data: state.data.filter((row) => row.id !== payload.id),
          }

        case `${actionTypeObject.updateRow}`:
          return {
            ...state,
            data: [...state.data.map((row) => ((row.id === payload.id) ? payload.row : row))],
          }

        case `${actionTypeObject.insertRow}`:
          return {
            ...state,
            data: [...state.data, payload.row],
          }

        case `${actionTypeObject.fetchDataSuccess}`:
          return { ...state, data: payload, pending: false }

        case `${actionTypeObject.fetchDataPending}`:
          return { ...state, pending: true }

        case `${actionTypeObject.fetchDataError}`:
          return { ...state, pending: false, error: payload }

        case `${actionTypeObject.clearFetchError}`:
          return { ...state, error: false }

        default:
          return state
      }
    })
}
