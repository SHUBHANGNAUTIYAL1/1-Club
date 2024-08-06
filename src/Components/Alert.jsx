import React from "react";

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center z-50">
      <div className="bg-green-500 text-white font-bold py-2 px-4 rounded shadow-lg">
        {message}
        <button
          className="ml-4 bg-white text-green-500 rounded-full px-2 py-1 font-bold"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
