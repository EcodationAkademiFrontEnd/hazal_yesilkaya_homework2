import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ModalForm from '../ModalForm';
import KnowledgeTable from '../KnowledgeTable';

const AddUserButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [users, setUsers] = useState([]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: ''
  });

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const inputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputSave = () => {
    const newUser = { ...formData };
    setUsers([...users, newUser]);
    setFormData({
      firstName: '',
      lastName: '',
      username: ''
    });
    toggleModal();
  };

  return (
    <div>
      <div className="add_user_button">
        <Button color="primary" className="mt-3 adding_button" onClick={toggleModal}>Add User</Button>
        <ModalForm isVisible={isVisible} toggleModal={toggleModal} inputChange={inputChange} inputSave={inputSave}/>
      </div>
      <KnowledgeTable users={users} />
    </div>
  );
};

export default AddUserButton;
