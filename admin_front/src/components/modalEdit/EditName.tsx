import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

interface FormData{
    nameMaket:string;
};

export default function EditName(props: ModalType) {
    const{register,handleSubmit}=useForm<FormData>();
    return (
        <div>
            {props.isOpen && (
                <div className="z-9999 w-full h-full absolute top-0 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-white w-3/6 h-2/4 p-1 rounded-[20px]  flex-col justify-center items-center">
                        <h1 className="text-center py-12 font-bold  text-5xl ">แก้ไขชื่อร้าน</h1>
                        <div className="px-20 flex-col items-center space-y-0">
                            <p className=" label text-2xl font-bold pr-4">ชื่อร้าน</p>
                            <input 
                                {...register("nameMaket")} 
                                name="phoneNume" type="text" className="w-full   py-4 px-2 border border-gry-500 rounded-[20px] text-4xl" />
                        </div>
                        <div className="flex justify-center items-center font-normal text-xl py-7">
                            <div className="flex space-x-10 space-y-0 mt-5">
                                <Link to="/">
                                <button className="w-full py-4 px-16  bg-purple-btn hover:bg-dark-purple-highlight  text-white font-bold text-4xl rounded-full">ตกลง</button>
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