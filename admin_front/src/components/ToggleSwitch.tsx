import React, { useState } from 'react';

interface ToggleSwitchProps {
  onText: string;
  offText: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onText, offText }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <button
        className={`w-20 h-10 rounded-full p-1 transition-transform duration-500 ${
          isOn ? 'bg-green-ok transform -translate-x-2' : 'bg-red-cancel'
        }`}
        onClick={toggleSwitch}
      >
        <span
          className={`block w-8 h-8 rounded-full bg-white shadow-md transform duration-500 ${
            isOn ? 'translate-x-10' : ''
          }`}
        ></span>
      </button>
      <span className="ml-2 font-['kanit'] font-light">{isOn ? onText : offText}</span>
    </div>
  );
};

export default ToggleSwitch;
