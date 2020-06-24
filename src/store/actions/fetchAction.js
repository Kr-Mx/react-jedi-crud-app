import axios from 'axios'
import { transformFetchedData } from '../../helpers'
import { allActionsTypes } from './index'

export const fetchDataAction = (sectionName, columns) => async (dispatch) => {
  const actionTypeObject = allActionsTypes[sectionName]
  dispatch({ type: `${actionTypeObject.fetchDataPending}` })
  try {
    const { data } = await axios(`https://swapi.dev/api/${sectionName}/`)
    const transformedResults = transformFetchedData(data.results, columns)
    dispatch({ type: `${actionTypeObject.fetchDataSuccess}`, payload: transformedResults })
  } catch (e) {
    dispatch({ type: `${actionTypeObject.fetchDataError}`, payload: e })
  }
}
