import React from 'react'
import { TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import { capitalize } from '../../../helpers'

const unnecessaryFields = ['edited', 'created', 'id', 'beloved']

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
}))

const getValidatorsData = (object, isErrorMessage) => Object.entries(object)
  .filter(([key]) => key !== 'name')
  .map(([key, value]) => {
    const [validationValue, errorMessage] = Object.values(value)
    if (!isErrorMessage) {
      return `${key}:${validationValue}`
    }
    return `${errorMessage}`
  })

export const Fields = ({ data, handleChange, columns }) => {
  const classes = useStyles()
  const filteredData = data.filter(([key]) => !unnecessaryFields.includes(key))
  return (
    filteredData.map(([key, value], index) => (
      <TextValidator
        key={key}
        id={key}
        label={capitalize(key)}
        onChange={handleChange}
        className={classes.textField}
        name={key}
        value={value}
        variant="outlined"
        validators={getValidatorsData(columns[index], false)}
        errorMessages={getValidatorsData(columns[index], true)}
      />
    ))
  )
}
