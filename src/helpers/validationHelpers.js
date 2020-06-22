const createValidation = (createErrorMessage) => (value, type) => (
  { value, errorMessage: createErrorMessage(value, type) }
)

const maxStringLength = createValidation((value) => `Length must be less than ${value}`)

const checkType = createValidation((value, type) => `Must be ${type}`)

const required = createValidation(() => 'Required field')

const maxNumber = createValidation((value) => `Value must be less than ${value}`)

const matchRegexp = createValidation((value, type) => `Must be ${type}`)

const isPositive = createValidation(() => 'Must be greater than zero')

export {
  maxStringLength,
  checkType,
  required,
  maxNumber,
  matchRegexp,
  isPositive,
}
