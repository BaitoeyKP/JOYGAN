import React from "react";

interface ExampleComponentProps {
  text: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ text }) => {
  return (
    <div className="bg-green p-4 rounded-lg shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-2">Example Component</h2>
      <p className="text-gray-700">{text}</p>
      <button className="bg-purple text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  );
};

export default ExampleComponent;
