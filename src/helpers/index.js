import * as R from 'ramda'

export const capitalize = R.replace(/^./, R.toUpper)

export * from './validationHelpers'
export * from './mainPageHelpers'
export * from './formPageHelpers'
