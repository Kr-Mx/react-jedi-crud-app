import moment from 'moment'
import shortId from 'shortid'

export const getPageDataItem = (state) => (id) => state.find((item) => item.id === id)

export const transformFetchedData = (results, columns) => (results.map((result) => {
  const transformedResult = {}
  columns.forEach(
    ({ name }) => {
      if (name === 'created' || name === 'edited') {
        transformedResult[name] = moment(result[name]).format('DD.MM.YYYY hh:mm')
      } else transformedResult[name] = result[name]
    },
  )
  transformedResult.id = shortId.generate()
  transformedResult.beloved = false
  return transformedResult
}))
