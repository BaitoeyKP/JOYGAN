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
        className={`w-12 h-6 rounded-full p-1 transition-transform duration-500 ${
          isOn ? 'bg-green transform -translate-x-2' : 'bg-red'
        }`}
        onClick={toggleSwitch}
      >
        <span
          className={`block w-4 h-4 rounded-full bg-white shadow-md transform duration-500 ${
            isOn ? 'translate-x-6' : ''
          }`}
        ></span>
      </button>
      <span className="ml-2 font-['kanit'] font-light">{isOn ? onText : offText}</span>
    </div>
  );
};

export default ToggleSwitch;
