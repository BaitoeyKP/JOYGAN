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
      <div className="bg-white p-4 rounded-lg shadow-md relative">
        <p className="text-xl mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-cancel text-white rounded-lg mr-4"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-ok text-white rounded-lg"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
