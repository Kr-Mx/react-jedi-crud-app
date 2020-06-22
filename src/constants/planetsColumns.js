import {
  isPositive,
  maxNumber,
  maxStringLength,
  required,
} from '../helpers'

export const planetsColumns = [
  {
    name: 'name',
    maxStringLength: maxStringLength(30),
    required: required(true),
  },
  {
    name: 'diameter',
    isPositive: isPositive(true),
    maxNumber: maxNumber(10000000),
    required: required(true),
  },
  {
    name: 'climate',
    maxStringLength: maxStringLength(30),
    required: required(true),
  },
  {
    name: 'terrain',
    maxStringLength: maxStringLength(30),
    required: required(true),
  },
  {
    name: 'population',
    isPositive: isPositive(true),
    maxNumber: maxNumber(10000000),
    required: required(true),
  },
  { name: 'created' },
  { name: 'edited' },
]
