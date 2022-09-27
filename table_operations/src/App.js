import logo from './logo.svg';
import './App.css';
import TableForm from './components/TableForm';
import ParentChildForm from './components/ParentChildForm';
import ChildParentTable from './components/ChildParentTable';
import { useState } from 'react';
import List from './components/ClassTableList';
import UpdateTable from './components/UpdateTable';
import TableFormPopup from './components/TableFormPopup';

function App() {
  return (
    <div className="App">
      <TableForm/>
      {/* <UpdateTable/> */}
      {/* <TableFormPopup/> */}
      {/* <ParentChildForm/> */}
      {/* <ChildParentTable/> */}
      {/* <List/> */}
    </div>
  );
}

export default App;
