import React from 'react';
import { Table } from 'reactstrap';

const KnowledgeTable = ({ users }) => {
  if (users && users.length > 0) {
    return (
      <Table bordered className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
        <tr style={{ height: '20px' }}></tr> 
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    ); 
  } else if(users && users.length === 0){
    return (
      <Table bordered>
         <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
        <tr style={{ height: '20px' }}></tr> 
          <tr>
            <td colSpan="4" >No users found</td>
          </tr>
        </tbody>
      </Table> 
      );
  }
}

export default KnowledgeTable;
