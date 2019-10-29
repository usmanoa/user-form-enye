import React, {useEffect} from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserTable from './components/UsersTable'

const columns = [
  {title: 'User Id', dataIndex: 'userId', key: 'userId'},
  {title: 'First Name', dataIndex: 'firstName', key: 'firstName'},
  {title: 'Last Name', dataIndex: 'lastName', key: 'lastName'},
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

