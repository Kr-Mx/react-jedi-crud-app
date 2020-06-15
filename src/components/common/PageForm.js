import React, { useState } from 'react'
import {
  Button,
  makeStyles,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import shortId from 'shortid'
import { capitalize } from '../../helpers'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    width: 'fit-content',
  },
  textFieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}))

export const Fields = ({ fields, handleChange }) => (
  fields.map((field) => (field !== 'id')
    && (
      <TextField
        key={field}
        id={field}
        name={field}
        label={capitalize(field)}
        variant="outlined"
        onChange={handleChange}
      />
    ))
)

export const PageForm = ({ handleItemData, initialData, sectionName }) => {
  const [openForm, setOpenForm] = useState(false)
  const [formData, setFormData] = useState(initialData)
  const classes = useStyles()

  const handleChange = (event) => {
    const { target: input } = event
    const data = { ...formData }
    data[input.name] = input.value
    setFormData(data)
  }

  const handleOpen = () => {
    setFormData({ ...initialData, id: shortId.generate() })
    setOpenForm(true)
  }

  const handleClose = () => {
    setOpenForm(false)
  }

  const handleSubmit = () => {
    handleItemData(formData)
    handleClose()
  }

  return (
    <>
      <Button
        className={classes.button}
        color="primary"
        variant="outlined"
        onClick={handleOpen}
      >
        add new item
      </Button>
      <Dialog
        open={openForm}
        onClose={handleClose}
        hideBackdrop
      >
        <DialogTitle>{`Adding to ${sectionName} table`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add to this table your favorites, please enter data.
          </DialogContentText>
          <form className={classes.textFieldWrapper}>
            <Fields
              fields={Object.keys(formData)}
              handleChange={handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            disabled={Object.values(formData).some((item) => item === '')}
          >
            Add
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
