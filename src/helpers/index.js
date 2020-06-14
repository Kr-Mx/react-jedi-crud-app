import * as R from 'ramda'

export const capitalize = R.replace(/^./, R.toUpper)
