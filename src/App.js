import React from 'react';
import KnowledgeTable from './components/KnowledgeTable';
import AddUserButton from './components/add-user-button/AddUserButton';
import './components/add-user-button/AddUserButton.css';

const App = () => {
  return (
    <div className="container">
      <AddUserButton/>
      <KnowledgeTable />
    </div>
  );
}

export default App;
