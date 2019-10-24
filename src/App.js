import React from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserTable from './components/UsersTable'


const columns = [
  {title: 'First Name', dataIndex: 'first_name', key: 'first_name'},
  {title: 'Last Name', dataIndex: 'last_name', key: 'last_name'},
  {title: 'Birthday', dataIndex: 'birthday', key: 'birthday'},
  {title: 'Age', dataIndex: 'age', key: 'age'},
  {title: 'Hobby', dataIndex: 'hobby', key: 'hobby'}
]

const App = props => {
  return (
    <div>
      <AddUser />

      <UserTable
        columns={columns}
      />
    </div>
  );
}

export default App;

