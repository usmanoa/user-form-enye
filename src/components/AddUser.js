import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import 'antd/dist/antd.css';
import {Card, Row, Col, Input,InputNumber, DatePicker, Button} from 'antd';

import {postUser} from './../apiCalls/apiCalls'

const style = {
  marginTopBottom: {
    marginTop: "1rem",
    marginBottom: "1rem",
}
}

function AddUser(props){

  const dispatch = useDispatch();
    const [user, updateUser] = useState({});
        
    const handleChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      const newUser = {...user, [name]: value }
      
      updateUser(newUser);
  
    }
  
    const handleAge = number => {
      const age = number;
      const newUser = {
        ...user,
        age
      }
      updateUser(newUser);
    }
  
    const handleBirthday = date => {
      const birthday  = date.format('L');
      const newUser = {
        ...user,
        birthday
      }
      updateUser(newUser);
    }
  
    const submit = event =>{
      event.preventDefault();
      const userDetails = {
        ...user,
        userId: '',
      }
      console.log(userDetails)
      dispatch({type: 'ADD_USER', user: userDetails})
    }
    
      return (
        <div>
          <form style={{paddingTop: "1rem", paddingBottom: "3rem"}} onSubmit={submit}>
            <Row >
              <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}>
                <Card style={{backgroundColor: "#F9FDFF"}}  >
                  <h3 style={{textAlign: "center"}} >Add New User</h3>
                  <Row type="flex" justify="space-between" style={style.marginTopBottom} >
                    <Col xs={{ span: 11}} lg={{ span: 11}}>
                      <label>First Name</label>
                      <Input 
                        name="firstName"
                        type="text"
                        value={user.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                    <Col xs={{ span: 11}} lg={{ span: 11}}>
                      <label>Last Name</label>
                      <Input
                        name="lastName"
                        type="text"
                        value={user.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>
  
                  <Row type="flex" justify="space-between" style={style.marginTopBottom} >
                    <Col xs={{ span: 11}} lg={{ span: 11}}>
                      <label style={{display: "block"}}>Birthday </label>
                      <DatePicker
                        name="birthday"
                        style={{width: "100%"}} 
                        onChange={handleBirthday}
                        required
                      />
                    </Col>
                    <Col xs={{ span: 11}} lg={{ span: 11}}>
                      <label style={{display: "block"}}>Age </label>
                        <InputNumber
                          style={{width: "100%"}} 
                          name="age"
                          onChange={handleAge}
                          required
                        />
                    </Col>
                  </Row>
  
                  <Row style={style.marginTopBottom} >
                    <Col span={24}>
                      <label>Hobby</label>
                      <Input
                        name="hobby"
                        type="text"
                        value={user.hobby}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>
  
                  <Row style={style.marginTopBottom} >
                    <Col span={12} offset={6}>
                      <Button size="large" type="primary" htmlType="submit" block >Add User</Button>
                    </Col>
                  </Row>
  
                  
  
                </Card>
              </Col>
            </Row>
  
            
          </form>
        </div>
      );
  
}

export default AddUser
