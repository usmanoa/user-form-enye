import React from 'react';
import 'antd/dist/antd.css';
import {Table} from 'antd';

import {useSelector} from 'react-redux'
import {getUsers} from './../redux/selector'

const UserTable = ({columns}) => {
    const users = useSelector(state => getUsers(state))

    return(
        <>
            <h3 style={{textAlign: "center"}} >Table of Users</h3>
            <Table
                columns={columns}
                dataSource={users}
                style={{marginLeft: "2%", marginRight: "2%"}}
            />
        </>
    )
}

export default UserTable;
