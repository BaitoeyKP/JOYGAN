import { ReactNode } from "react";
import { Link } from "react-router-dom";
// import {useForm} from 'react-hook-form';
import { useState } from "react";
import axios from "axios";

interface ModalType {
    children?: ReactNode;
    isOpenShow: boolean;
    toggle: () => void;
}



export default function EditName(props: ModalType) {
    // const{register,handleSubmit}=useForm<FormData>();
    const [text, setText] = useState("");
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        setText(newText);
    };

    const handleSave = () => {
        // สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์
        const data = {
          editText: text,
    };

    axios
    .patch("http://10.66.5.253:3000/admin/user", data)
    .then((res) => {
      console.log(res);
      // ทำอย่างอื่นตามที่คุณต้องการหลังจากส่งข้อมูลสำเร็จ
    })
    .catch((error) => {
      console.log(error);
      // จัดการข้อผิดพลาด (error handling) ตามที่คุณต้องการ
    });

  };

    return (
        <div>
            {props.isOpenShow && (
                <div className="z-9999 w-full h-full fixed left-0 top-0 bg-black bg-opacity-70 flex justify-center items-center">
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
                            <div>
                                {/* <uploatFile ></uploatFile> */}
                            </div>
                            <div className=" justify-center items-end font-normal text-xl py-7">
                                <div className="space-y-0 w-full justify-col items-end">
                                    <Link to="/">
                                    <button className="w-full  py-3 px-5 mb-8 bg-purple-btn hover:bg-dark-purple-highlight  text-white font-bold text-4xl rounded-full"onClick={handleSave}>บันทึก</button>
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