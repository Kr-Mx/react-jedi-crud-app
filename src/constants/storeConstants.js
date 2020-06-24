import { appCommonData } from './index'

export const actionTypesArray = [
  'DELETE_ROW',
  'UPDATE_ROW',
  'INSERT_ROW',
  'CLEAR_FETCH_ERROR',
  'FETCH_DATA_SUCCESS',
  'FETCH_DATA_PENDING',
  'FETCH_DATA_ERROR',
]

export const [people, planets, starships] = appCommonData.map((appData) => (appData.name))
