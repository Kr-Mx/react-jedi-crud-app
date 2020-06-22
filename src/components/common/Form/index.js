import React from 'react'
import {
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { ValidatorForm } from 'react-material-ui-form-validator'
import { Fields } from './Fields'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    width: 'fit-content',
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  form: {
    minWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
  },
}))

export const Form = (props) => {
  const classes = useStyles()
  const {
    handleSubmit,
    sectionName,
    handleChange,
    goBack,
    formData,
    columns,
  } = props
  return (
    <>
      <Typography className={classes.header} variant="h6">
        {`Please enter ${sectionName} data.`}
      </Typography>
      <ValidatorForm component="form" className={classes.form} onSubmit={handleSubmit}>
        <Fields
          data={Object.entries(formData)}
          handleChange={handleChange}
          columns={columns}
        />
        <Grid container justify="space-between">
          <Button
            type="submit"
            disabled={Object.values(formData).some((item) => item === '')}
          >
            Add
          </Button>
          <Button
            type="reset"
            onClick={goBack}
          >
            Cancel
          </Button>
        </Grid>
      </ValidatorForm>
    </>
  )
}
