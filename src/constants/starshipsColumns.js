import {
  isPositive,
  maxNumber,
  maxStringLength,
  required,
} from '../helpers'

export const starshipsColumns = [
  {
    name: 'name',
    maxStringLength: maxStringLength(30),
    required: required(true),
  },
  {
    name: 'model',
    maxStringLength: maxStringLength(30),
    required: required(true),
  },
  {
    name: 'starship_class',
    maxStringLength: maxStringLength(30),
    required: required(true),
  },
  {
    name: 'length',
    isPositive: isPositive(true),
    maxNumber: maxNumber(10000000),
    required: required(true),
  },
  {
    name: 'manufacturer',
    maxStringLength: maxStringLength(30),
    required: required(true),
  },
  { name: 'created' },
  { name: 'edited' },
]
