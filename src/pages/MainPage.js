import React, { useState } from 'react'
import { PageTable } from '../components/common/Table'
import { PageHeader } from '../components/common/PageHeader'
import { PageForm } from '../components/common/PageForm'

export const MainPage = ({ pageData }) => {
  const { name: sectionName, columns } = pageData
  const [tableData, setTableData] = useState({ people: [], starships: [], planets: [] })
  const currentState = tableData[sectionName]

  const deleteRow = (id) => {
    setTableData({ ...tableData, [sectionName]: currentState.filter((data) => data.id !== id) })
  }

  const getInitialData = () => (
    columns.reduce((cols, columnName) => {
      cols[columnName] = ''
      return cols
    }, {})
  )

  const handleItemData = (item) => {
    const data = [...currentState, item]
    setTableData({ ...tableData, [sectionName]: data })
  }

  return (
    <>
      <PageHeader sectionName={sectionName} isEmpty={!currentState.length}>
        <PageForm
          handleItemData={handleItemData}
          sectionName={sectionName}
          initialData={getInitialData()}
        />
      </PageHeader>
      <PageTable
        tableData={currentState}
        headings={columns}
        deleteRow={deleteRow}
      />
    </>
  )
}
