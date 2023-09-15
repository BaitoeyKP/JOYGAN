import React from "react";
//import ExampleComponent from "./components/ExampleComponent";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  return (    
    
  <nav className="bg-purple drop-shadow-xl">
    <div className="flex flex-row justify-between h-24">
      <button className="flex flex-row gap-8 items-start">
        <a href="#" className="m-6"><img src="https://file.rendit.io/n/RZSrLxKdrXOppUJZrRp6.svg"/></a>
        <a href="#" className="m-3 mt-7 font-['kanit'] font-medium text-2xl text-dark-purple">หน้าหลัก</a>
        <a href="#" className="m-3 mt-7 font-['kanit'] font-light text-2xl text-black">ประวัติรายได้</a>
        <a href="#" className="m-3 mt-7 font-['kanit'] font-light text-2xl text-black">จัดการบัญชี</a>
      </button>
      <div className="m-7 font-['kanit'] font-light flex flex-row gap-2 items-start text-2xl text-black">
      <ToggleSwitch onText="เปิดระบบ" offText="ปิดระบบ" />
      </div>
    </div>
  </nav>
  
  );
}

export default App;
