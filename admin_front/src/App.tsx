import React from 'react';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  const menuItems = [
    { label: 'หน้าหลัก', path: 'home' },
    { label: 'ประวัติรายได้', path: 'IncomeHist' },
    { label: 'จัดการบัญชี', path: 'Account' },
  ];

  return (
    <div>
      <NavBar menuItems={menuItems} />
      
    </div>
  );
};

export default App;
