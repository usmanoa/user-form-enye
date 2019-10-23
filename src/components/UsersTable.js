import React from 'react';
import 'antd/dist/antd.css';
import {Table} from 'antd';

const UserTable = ({columns, data}) => {
    return(
        <>
            <h3 style={{textAlign: "center"}} >Table of Users</h3>
            <Table
                columns={columns}
                dataSource={data}
                style={{marginLeft: "2%", marginRight: "2%"}}
            />
        </>
    )
}

export default UserTable;



