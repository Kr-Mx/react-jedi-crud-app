export const getInitialData = (array) => {
  const initialData = {}
  array.forEach((item) => {
    if (!(item === 'edited' || item === 'created' || item === 'id')) {
      initialData[item] = ''
    }
  })
  return initialData
}
