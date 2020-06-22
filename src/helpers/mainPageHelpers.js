import moment from 'moment'
import shortId from 'shortid'
import axios from 'axios'

const filterPageData = (state, setState) => (id) => {
  setState(
    [...state.filter((data) => data.id !== id)],
  )
}

const handleSubmitPageData = (state, setState) => (item, id) => {
  if (id) {
    setState([...state.map((row) => {
      if (row.id === id) {
        return item
      }
      return row
    })])
  } else setState([...state, item])
}

const getPageDataItem = (state) => (id) => state.find((item) => item.id === id)

const getDataFromLocalStorage = (sectionName) => JSON.parse(localStorage.getItem(`${sectionName}`)) || []

const transformFetchedData = (results, columns) => results.map((result) => {
  const transformedResult = {}
  columns.forEach(
    ({ name }) => {
      if (name === 'created' || name === 'edited') {
        transformedResult[name] = moment(result[name]).format('DD.MM.YYYY hh:mm')
      } else transformedResult[name] = result[name]
    },
  )
  transformedResult.id = shortId.generate()
  return transformedResult
})

const fetchData = (sectionName, stateData, setPending, setError, columns) => () => {
  const [state, setState] = stateData
  if (!state.length) {
    const getFetchData = async () => {
      setPending(true)
      try {
        const { data } = await axios(
          `https://swapi.dev/api/${sectionName}/`,
        )
        const transformedResults = transformFetchedData(data.results, columns)
        setPending(false)
        setState(transformedResults)
      } catch (e) {
        setPending(false)
        setError(e)
      }
    }
    getFetchData(sectionName, setState)
  }
}

export {
  fetchData,
  filterPageData,
  getPageDataItem,
  handleSubmitPageData,
  getDataFromLocalStorage,
}
