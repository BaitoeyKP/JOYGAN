import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  bgColor?: string; 
  hoverColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text, onClick, bgColor, hoverColor }) => {
  const defaultBgColor = bgColor || "purple"; // Default background color is "purple" if not provided
  const hoverBgColor = hoverColor || "purple-100" ; // Darken color on hover
  console.log(hoverColor);
  console.log(hoverBgColor);

  return (
    <button
      className={`flex items-center space-x-2 text-white px-4 py-2 my-3 rounded-full font-kanit font-light drop-shadow-md bg-${defaultBgColor} hover:bg-${hoverBgColor} `}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default IconButton;
