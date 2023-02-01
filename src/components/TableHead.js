import { useState } from 'react'
const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState('')
  console.log(sortField, 'hooo')
  const [order, setOrder] = useState('asc')
  console.log(order, 'hiii')

  const handleSortingChange = accessor => {
    console.log(accessor)
    console.log(columns)
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc'
    setSortField(accessor)
    setOrder(sortOrder)
    handleSorting(accessor, sortOrder)
    console.log(accessor, 'yo')
  }

  return (
    <>
      <thead>
        <tr>
          {columns.map(({ label, accessor, sortable }) => {
            const cl = sortable
              ? sortField === accessor && order === 'asc'
                ? 'up'
                : sortField === accessor && order === 'desc'
                ? 'down'
                : 'default'
              : ''
            return (
              <th
                key={accessor}
                onClick={sortable ? () => handleSortingChange(accessor) : null}
                className={cl}
              >
                {label}
              </th>
            )
          })}
        </tr>
      </thead>
    </>
  )
}

export default TableHead
