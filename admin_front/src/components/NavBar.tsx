import React from 'react';
import ToggleSwitch from './ToggleSwitch';

interface MenuItem {
  label: string;
  path: string;
}

interface NavBarProps {
  menuItems: MenuItem[];
}

const NavBar: React.FC<NavBarProps> = ({ menuItems }) => {
  return (
    <nav className="bg-purple drop-shadow-xl">
      <div className="flex flex-row justify-between h-24">
        <button className="flex flex-row gap-8 items-start">
          <a href="#" className="m-6">
            <img src="https://file.rendit.io/n/RZSrLxKdrXOppUJZrRp6.svg" alt="Logo" />
          </a>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="m-3 mt-7 font-['kanit'] font-normal text-2xl text-black"
            >
              {item.label}
            </a>
          ))}
        </button>
        <div className="m-7 font-['kanit'] font-light flex flex-row gap-2 items-start text-2xl text-black">
          <ToggleSwitch onText="เปิดระบบ" offText="ปิดระบบ" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
