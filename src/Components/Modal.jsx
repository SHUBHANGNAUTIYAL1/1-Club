import React from "react";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md ">
        <div className="flex justify-end p-1 md:p-2">
          <button
            className="text-gray-500 hover:text-gray-700 text-lg md:text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="px-2 pb-2 md:px-6 md:pb-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
