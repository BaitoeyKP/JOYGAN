import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { useState } from "react";
import uploatFile from "./imageUpload";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

interface FormData{
    phoneNume:string;
};

export default function EditName(props: ModalType) {
    const [text, setText] = useState("");
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        setText(newText);
    };
    return (
        <div>
            {props.isOpen && (
                <div className="z-9999 w-full h-full absolute top-0 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-white w-4/7 h-3/4 p-1 rounded-[20px] ">
                        <h1 className="text-center py-12 font-bold  text-5xl ">แก้ไขการแสดงขึ้นจอ</h1>
                        <div className="bg-white w-3/6 h-2/4 p-1 rounded-[20px] flex justify-between">
                            <div className="px-20 flex-col items-left"> 
                                <textarea
                                        className="border border-gray-800 text-3xl rounded-[20px]"
                                        name="editText"
                                        rows={5}
                                        cols={15}
                                        maxLength={60}
                                        value={text} // ใช้ค่าจาก state ในการแสดงข้อความใน textarea
                                        onChange={handleTextChange} // เรียกใช้ฟังก์ชันเมื่อข้อความเปลี่ยนแปลง
                                    />
                                    <p className="text-end">{text.length} / 60</p>
                            </div>
                            <div className=" justify-center items-end font-normal text-xl py-7">
                                <div className="space-y-0 w-full justify-col items-end">
                                    <Link to="/">
                                    <button className="w-full  py-3 px-5 mb-8 bg-purple-btn hover:bg-dark-purple-highlight  text-white font-bold text-4xl rounded-full">บันทึก</button>
                                    </Link>
                                    <button className="w-full py-3 px-5  bg-red-500 hover:bg-red-700 text-white font-bold text-4xl rounded-full" onClick={props.toggle}>ยกเลิก</button>
                                    
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );
}