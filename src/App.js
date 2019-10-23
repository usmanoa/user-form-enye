import React, { useState } from 'react';
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
let id = 0;

const App = props => {
  const [users, updateUsers] = useState([]);

  const addUser = newUser => {
    const newUserWithKey = {...newUser, key: id++}
    const newUsers = [
      ...users,
      newUserWithKey
    ]
    updateUsers(newUsers)
  }

  return (
    <div>
      <AddUser addNewUser={addUser} />

      <UserTable
        columns={columns}
        data={users}
      />
    </div>
  );
}

export default App;

