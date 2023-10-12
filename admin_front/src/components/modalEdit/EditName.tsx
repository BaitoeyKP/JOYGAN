import { ReactNode, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

interface ModalType {
    children?: ReactNode;
    isOpenName: boolean;
    toggle: () => void;
}


export default function EditName(props: ModalType) {
    const [marketName, setMarketName] = useState("");
    const [displayText, setDisplayText] = useState('');
    const ipAddress = '127.0.0.1';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios({
            method:'post',
            url:'http://127.0.0.1:8000/admin/user/login',
            data:{
                marketName: marketName
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("JWT")}`
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleButtonClick = () => {
        if (marketName) {
            setDisplayText("");
        } else {
            setDisplayText('*คุณยังไม่ได้ใส่ชื่อร้าน*');
        }
    };

    return (
        <div>
            {props.isOpenName && (
                <div className="z-9999 w-full h-full fixed left-0 top-0 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-white w-3/6 h-3/5 p-1 rounded-[20px]  flex-col justify-center items-center">
                        <h1 className="text-center py-12 font-bold  text-5xl ">แก้ไขชื่อร้าน</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="px-20 flex-col items-center space-y-0">
                                <p className=" label text-2xl font-bold pr-4">ชื่อร้าน</p>
                                <input
                                    onChange={e => setMarketName(e.target.value)}
                                    value={marketName}
                                    name="marketName"
                                    type="text"
                                    className="w-full   py-4 px-2 border border-gry-500 rounded-[20px] text-4xl" />
                            </div>
                            <div className=" flex ml-[90px] text-red-cancel">
                                <p>{displayText}</p>
                            </div>
                        </form>
                        <div className="flex justify-center items-center font-normal text-xl py-7">
                            <div className="flex space-x-10 space-y-0 mt-5">
                                <Link to="/">
                                    <button className="w-full py-4 px-16  bg-purple-btn hover:bg-dark-purple-highlight  text-white font-bold text-4xl rounded-full" onClick={handleButtonClick}>ตกลง</button>
                                </Link>
                                <button className="w-full py-4 px-16 bg-red-500 hover:bg-red-700 text-white font-bold text-4xl rounded-full" onClick={props.toggle}>ยกเลิก</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
