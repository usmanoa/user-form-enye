import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Card, Row, Col, Input,InputNumber, DatePicker, Button, Table} from 'antd';

const columns = [
  {title: 'First Name', dataIndex: 'first_name', key: 'first_name'},
  {title: 'Last Name', dataIndex: 'last_name', key: 'last_name'},
  {title: 'Birthday', dataIndex: 'birthday', key: 'birthday'},
  {title: 'Age', dataIndex: 'age', key: 'age'},
  {title: 'Hobby', dataIndex: 'hobby', key: 'hobby'}
]

let userId = 0;

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      user: {
        first_name: "",
        last_name: "",
        birthday: "",
        age: "",
        hobby: ""
      },

      users: []

    }
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const newUser = {...this.state.user, [name]: value }

    this.setState({user: newUser});

  }

  handleAge = number => {
    const age = number;
    const newUser = {
      ...this.state.user,
      age
    }
    this.setState({user: newUser});
  }

  handleBirthday = date => {
    const birthday  = date.format('L');
    const newUser = {
      ...this.state.user,
      birthday
    }
    this.setState({user: newUser});
  }

  submit = event =>{
    event.preventDefault();
    const key = userId++;
    const newUser = {...this.state.user, key}

    const newUsers = [...this.state.users, newUser]
    this.setState({users: newUsers})
    console.log(this.state.users)
  }
  render(){
  
    return (
      <div>
        <form style={{paddingTop: "2rem", paddingBottom: "3rem"}} onSubmit={this.submit}>
          <Row >
            <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}>
              <Card style={{backgroundColor: "#F9FDFF"}}  >

                <Row type="flex" justify="space-between" className="margin-row" >
                  <Col xs={{ span: 11}} lg={{ span: 11}}>
                    <label>First Name</label>
                    <Input 
                      name="first_name"
                      type="text"
                      value={this.state.user.first_name}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                  <Col xs={{ span: 11}} lg={{ span: 11}}>
                    <label>Last Name</label>
                    <Input
                      name="last_name"
                      type="text"
                      value={this.state.user.last_name}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row type="flex" justify="space-between" className="margin-row" >
                  <Col xs={{ span: 11}} lg={{ span: 11}}>
                    <label style={{display: "block"}}>Birthday </label>
                    <DatePicker
                      name="birthday"
                      style={{width: "100%"}} 
                      onChange={this.handleBirthday}
                      required
                    />
                  </Col>
                  <Col xs={{ span: 11}} lg={{ span: 11}}>
                    <label style={{display: "block"}}>Age </label>
                      <InputNumber
                        style={{width: "100%"}} 
                        name="age"
                        onChange={this.handleAge}
                        required
                      />
                  </Col>
                </Row>

                <Row className="margin-row" >
                  <Col span={24}>
                    <label>Hobby</label>
                    <Input
                      name="hobby"
                      type="text"
                      value={this.state.user.hobby}
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row className="margin-row" >
                  <Col span={12} offset={6}>
                    <Button size="large" type="primary" htmlType="submit" block >Add User</Button>
                  </Col>
                </Row>

                

              </Card>
            </Col>
          </Row>

          
        </form>
        <h3 style={{textAlign: "center"}} >Table of Users</h3>
        <UserTable data={this.state.users} columns={columns} pagination={false} />
      </div>
    );
  }
}

export default App;

const UserTable = ({columns, data}) => {
  return(
    <Table columns={columns} dataSource={data} style={{marginLeft: "2%", marginRight: "2%"}}/>
  )
}
