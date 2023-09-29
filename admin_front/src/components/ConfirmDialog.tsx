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
      <div className="bg-white px-10 py-8 rounded-xl shadow-md relative">
        <p className="text-2xl font-bold mb-4">{message}</p>
        <div className="flex justify-between">
          <button
            className="px-8 py-2 bg-purple-btn  text-white rounded-xl mr-4"
            onClick={onConfirm}
          >
            ยืนยัน
          </button>
          <button
            className="px-8 py-2 bg-red-cancel text-white rounded-xl"
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
