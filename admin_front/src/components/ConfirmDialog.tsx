import React from "react";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Semi-transparent overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onCancel} // Allow clicking outside to cancel
      ></div>
      {/* Confirmation card */}
      <div className="bg-white w-2/6  p-1 rounded-[20px] flex flex-col justify-between shadow-md relative">
        <p className="text-center py-12 font-bold  text-5xl ">{message}</p>
        <div className="flex justify-center items-center font-normal text-xl py-7">
        <button
            className="w-2/5 py-4 px-3 mb-5 bg-purple-btn hover:bg-dark-purple-highlight  text-white font-bold text-3xl rounded-[40px]"
            onClick={onConfirm}
          >
            ตกลง
          </button>
          <button
            className="w-2/5 py-4 px-3 mb-5 ml-4 bg-red-500 hover:bg-red-700 text-white font-bold text-3xl rounded-[40px]"
            onClick={onCancel}
          >
            ยกเลิก
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
