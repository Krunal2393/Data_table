// import Table from './components/Table'
// import tableData1 from './tableData1.json'
// import RenderAnotherTable from './components/RenderAnotherTable'

// const columns = [
//   { label: 'Full Name', accessor: 'full_name', sortable: true },
//   { label: 'Email', accessor: 'email', sortable: false },
//   { label: 'Gender', accessor: 'gender', sortable: true, sortbyOrder: 'desc' },
//   { label: 'Age', accessor: 'age', sortable: true },
//   { label: 'Start date', accessor: 'start_date', sortable: true }
// ]

// const App = () => {
//   return (
//     <div className='table_container'>
//       <h1>Sortable Data table</h1>
//       <Table caption='' data={tableData1} columns={columns} />
//       <br />
//       <RenderAnotherTable />
//       <br />
//     </div>
//   )
// }

// export default App
import React from 'react'
import CustomDataTable from './components/CustomDataTable '

const App = () => {
  const data = [
    { name: 'Ankit ', age: 25, city: 'New York' },
    { name: 'Vaibhav ', age: 27, city: 'Los Angeles' },
    { name: 'Manish ', age: 24, city: 'america' },
    { name: 'Himanish ', age: 20, city: 'africa' },
    { name: 'Vidhi ', age: 19, city: 'canada' },
    { name: 'Nikhil ', age: 25, city: 'australi' },
    { name: 'Harsh ', age: 23, city: 'srilanka' },
    { name: 'Kevin ', age: 24, city: 'bangladesh' },
    { name: 'Priyank ', age: 21, city: 'newzealand' },
    { name: 'Vinay ', age: 22, city: 'uae ' }
  ]

  return <CustomDataTable data={data} />
}

export default App
