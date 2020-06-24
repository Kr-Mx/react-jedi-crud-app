import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import moment from 'moment'
import { getInitialData } from '../../helpers'
import { Form } from '../common/Form'

export const FormPage = (props) => {
  const { id } = useParams()
  const {
    updateRow,
    insertRow,
    sectionName,
    isEditMode,
    findRow,
    columns,
  } = props

  const initialData = (isEditMode)
    ? findRow(id)
    : getInitialData(columns.map(({ name }) => name))

  const [formData, setFormData] = useState(initialData)

  const history = useHistory()

  const handleChange = (event) => {
    const { target: input } = event
    const data = { ...formData }
    data[input.name] = input.value
    setFormData(data)
  }

  const goBack = () => {
    history.push(`/${sectionName}`)
  }

  const handleSubmit = () => {
    const data = { ...formData }
    data.created = (!isEditMode) ? moment().format('DD.MM.YYYY hh:mm') : formData.created
    data.edited = (isEditMode) ? moment().format('DD.MM.YYYY hh:mm') : 'N/A'
    data.id = id
    if (!isEditMode) { data.beloved = false }
    if (isEditMode) { updateRow(id, data) } else insertRow(data)
    goBack()
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      sectionName={sectionName}
      handleChange={handleChange}
      goBack={goBack}
      formData={formData}
      columns={columns}
    />
  )
}
