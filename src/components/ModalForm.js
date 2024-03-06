import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap';

const ModalForm = ({ isVisible, toggleModal, inputChange, inputSave }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const submit = () => {
    // Değerleri al
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;

    // Gerekli alanların kontrolü
    if (!firstName || !lastName || !username) {
      setAlertMessage('Please complete all fields.');
      setShowAlert(true);
      return;
    }

    // inputSave işlevini çağır
    inputSave();
    // Alert mesajını gizle
    setAlertMessage('');
    setShowAlert(false);
  };

  return (
    <Modal isOpen={isVisible} toggle={toggleModal} onOpened={() => setShowAlert(false)} onClosed={() => setShowAlert(false)}>
        {showAlert && (
        <div className="alert-container" style={{width: '80%', marginLeft: 'auto',marginRight: 'auto', marginTop: '10px'}}>
          <div className="alert alert-danger" style={{textAlign:"center"}}>{alertMessage}</div>
        </div>
      )}
      <ModalHeader toggle={toggleModal}>Add User</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder="Enter First Name" onChange={inputChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" onChange={inputChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Enter Username" onChange={inputChange} required/>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submit}>Save</Button>
        <Button color="secondary" onClick={toggleModal}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalForm;
