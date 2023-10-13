import { ReactNode, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
// import {useForm} from 'react-hook-form';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    setRefresh:React.Dispatch<React.SetStateAction<number>>;
}


export default function EditQR(props: ModalType) {
    // const{register,handleSubmit}=useForm<FormData>();
    const [phoneNume, setphoneNume] = useState(""); // ย้าย useState มาที่นี่
    const [displayText, setDisplayText] = useState('');
    const ipAddress = '127.0.0.1';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios({
            method: 'patch',
            url: `http://${ipAddress}:8000/admin/user/tel/${phoneNume}`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("JWT")}`
            },
            
        })
            .then((res) => {
                console.log(res);
                props.setRefresh((x)=>x+1);
                props.toggle();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleButtonClick = () => {
        if (phoneNume) {
            setDisplayText("");
        } else {
            setDisplayText('*คุณยังไม่ได้กรอกเบอร์พร้อมเพย์*');
        }
    };

    return (
        <div>
            {props.isOpen && (
                <div className="z-9999 w-full h-full left-0  fixed top-0 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-white w-3/6 h-3/5 p-1 rounded-[20px]  flex-col justify-center items-center">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <h1 className="text-center py-12 font-bold  text-5xl ">แก้ไขบัญชีที่ใช้รับเงิน</h1>

                            <div className="px-20 flex-col items-center space-y-0">
                                <p className=" label text-2xl font-bold pr-4">กรอกเบอร์พร้อมเพย์รับเงิน</p>
                                <input
                                    onChange={e => setphoneNume(e.target.value)}
                                    // {...register("phoneNume")} 
                                    name="phoneNume" type="text" className="w-full   py-4 px-2 border border-gry-500 rounded-[20px] text-3xl" />
                            </div>

                            <div className=" flex ml-[90px] text-red-cancel">
                                <p >{displayText}</p>
                            </div>
                            <div className="flex justify-center items-center font-normal text-xl ">
                                <div className="flex space-x-10 space-y-0 mt-5">
                                    <button className="w-full py-4 px-16  bg-purple-btn hover:bg-dark-purple-highlight  text-white font-bold text-4xl rounded-full" onClick={handleButtonClick}>ตกลง</button>
                                    <button className="w-full py-4 px-16 bg-red-500 hover:bg-red-700 text-white font-bold text-4xl rounded-full" onClick={props.toggle}>ยกเลิก</button>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
}