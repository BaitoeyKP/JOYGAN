import qrCode from "../assets/qrCode.png"
import TopSpenderMonitor from "../components/TopSpenderMonitor"
import monitorImg from "../assets/monitorPic.jpg"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

const data = [
    { usename: "username1", amount: 10000 },
    { usename: "username2", amount: 1000 },
    { usename: "username3", amount: 100 },
    { usename: "username4", amount: 10 },
    { usename: "username5", amount: 1 },
]

// interface storInfoType {
//     storeName: string;
//     storeCode: string;
// }

function Monitor() {
    let storeName = "abc";
    let storeCode = "123456";
    let caption = "Lorem ipsum dolor sit amet, consectetur cras amet.";

    // async function getStoreInfo({ storeName, storeCode }: storInfoType) {
    //     try {
    //         const response = await axios.get('10.66.10.105:3000/admin/income/toprank');
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <div className="flex bg-cream-bg min-h-screen h-full w-screen">
            <div className="flex basis-1/2 justify-center items-center flex-col gap-7">
                <Link to="/" className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50" viewBox="0 0 50 50"
                        fill="none"
                        className="mr-2">
                        <path d="M10.293 27.207C9.07227 25.9863 9.07227 24.0039 10.293 22.7832L29.043 4.0332C30.2637 2.8125 32.2461 2.8125 33.4668 4.0332C34.6875 5.25391 34.6875 7.23633 33.4668 8.45703L16.9238 25L33.457 41.543C34.6777 42.7637 34.6777 44.7461 33.457 45.9668C32.2363 47.1875 30.2539 47.1875 29.0332 45.9668L10.2832 27.2168L10.293 27.207Z" fill="#393939" />
                    </svg>
                    <p className="text-black-text">
                        <span className="text-7xl font-semibold">ร้าน{storeName} </span>
                        <span className="text-5xl font-normal">({storeCode})</span>
                    </p>
                </Link>
                <img src={monitorImg} alt="" className="w-[555px] h-[555px] object-cover rounded-xl" />
                <p className="text-5xl font-normal text-center w-[555px] text-black-text">{caption}</p>
            </div>
            <div className="flex basis-1/2 justify-center items-center flex-col">
                <div className="flex basis-1/2 justify-center items-center flex-col">
                    <h1 className="text-5xl font-bold font-black-text mb-4 text-black-text">ยอดสนับสนุนสูงสุด</h1>
                    <div className="w-full flex flex-col items-center gap-4">{
                        data.map((info, index) => (
                            <TopSpenderMonitor key={index} username={info.usename} amount={info.amount}></TopSpenderMonitor>
                        ))
                    }</div>
                </div>
                <div className="flex basis-1/2 justify-center items-center flex-col">
                    <img src={qrCode} alt="" className="w-1/2 mb-6 rounded-xl" />
                    <p className="text-5xl font-bold font-black-text text-black-text">ดาวน์โหลดแอปพลิเคชั่น</p>
                </div>
            </div>
        </div>
    )
}

export default Monitor