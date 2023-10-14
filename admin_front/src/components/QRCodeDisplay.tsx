import React from "react";
// import EditQR from './modalEdit/EditQR';
import EditQR from "./modalEdit/EditQR";

interface QRCodeDisplayProps {
  qrshop:{
    pic:string;
    tel:string
  };
  handleQrClick: () => void;
}
const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrshop, handleQrClick }) => {
  
  // Format the account number into sets of 4 characters

  return (
    
    <div className="flex flex-col items-center">
      
      <div id="Header" className="flex flex-col items-center text-xl font-bold my-2">
        <h1>QR code รับเงิน</h1>
      </div>
      <div id="QrCodeImg" className="flex flex-col">
        <img
          src={`data:image/jpeg;base64,${qrshop.pic}`}
          alt="QRcodeImage"
          className="h-40"
        />
      </div>
      <div id="Account" className="my-5 flex flex-col items-center">
        <div id="Account number" className="flex flex-row text-sm xl:text-lg">
          <h6>เลขที่พร้อมเพย์ : {qrshop.tel}</h6>
        </div>
      </div>
      <div id="button" className="flex flex-col items-center">
        <button className="bg-purple-btn hover:bg-dark-purple-highlight rounded-xl shadow-md px-4 py-3 flex fkex-row active:ring active:ring-2 active:ring-offset-2 active:ring-violet-600" 
        onClick={handleQrClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M5 14v-2h2v2H5Zm-2-2v-2h2v2H3Zm9-7V3h2v2h-2ZM4.5 7.5h3v-3h-3v3Zm0 12h3v-3h-3v3Zm12-12h3v-3h-3v3ZM9 14v-2H7v-2h4v4H9Zm1-5V5h2v2h2v2h-4ZM5.25 6.75v-1.5h1.5v1.5h-1.5Zm0 12v-1.5h1.5v1.5h-1.5Zm12-12v-1.5h1.5v1.5h-1.5ZM16 18h-2q-.425 0-.713-.288T13 17q0-.425.288-.713T14 16h2v-2q0-.425.288-.713T17 13q.425 0 .713.288T18 14v2h2q.425 0 .713.288T21 17q0 .425-.288.713T20 18h-2v2q0 .425-.288.713T17 21q-.425 0-.713-.288T16 20v-2ZM3 8V4q0-.425.288-.713T4 3h4q.425 0 .713.288T9 4v4q0 .425-.288.713T8 9H4q-.425 0-.713-.288T3 8Zm0 12v-4q0-.425.288-.713T4 15h4q.425 0 .713.288T9 16v4q0 .425-.288.713T8 21H4q-.425 0-.713-.288T3 20ZM15 8V4q0-.425.288-.713T16 3h4q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-4q-.425 0-.713-.288T15 8Z"
            />
          </svg>
          <div className="mx-2 text-white text-sm xl:text-lg">
            แก้ไขบัญชีที่ใช้รับเงิน
          </div>
        </button>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
