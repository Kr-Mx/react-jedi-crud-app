import {
  checkType,
  isPositive,
  matchRegexp,
  maxNumber,
  maxStringLength,
  required,
} from '../helpers'

export const peopleColumns = [
  {
    name: 'name',
    maxStringLength: maxStringLength(20),
    required: required(true),
  },
  {
    name: 'mass',
    isNumber: checkType(true, 'numbers'),
    isPositive: isPositive(true),
    maxNumber: maxNumber(200),
    required: required(true),
  },
  {
    name: 'height',
    isNumber: checkType(true, 'numbers'),
    isPositive: isPositive(true),
    maxNumber: maxNumber(300),
    required: required(true),
  },
  {
    name: 'birth_year',
    maxStringLength: maxStringLength(8),
    matchRegexp: matchRegexp('^[0-9]{1,5}BBY$', '0-9 and BBY at the end'),
    required: required(true),
  },
  {
    name: 'gender',
    matchRegexp: matchRegexp('^male$|^female$|^n/a$', 'male, female or n/a'),
    required: required(true),
  },
  { name: 'created' },
  { name: 'edited' },
]
