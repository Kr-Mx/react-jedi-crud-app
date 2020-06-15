import * as R from 'ramda'

export const capitalize = R.replace(/^./, R.toUpper)

export const getInitialData = (array) => {
  const initialData = {}
  array.forEach((item) => { initialData[item] = '' })
  return initialData
}
