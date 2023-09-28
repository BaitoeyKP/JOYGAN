import React, { useState } from "react";
import {useForm} from 'react-hook-form';

interface FormData{
    id:number
    username:string;
    password:string;
};

function Login(){
    const[name,passWord]=useState();
    const{register,handleSubmit}=useForm<FormData>();

    const onSubmit=handleSubmit(({username,password})=>{
    console.log(username,password)});

    return(
            <div className="min-h-screen bg-cream-bg flex flex-col justtify-center font-kanit justify-center">  
                <div className="max-w-md w-full mx-auto  bg-white p-8 border border-gray-300 rounded-lg shadow-lg ">
                    <div className="text-5xl font-bold mt-2 justify-center text-center">เข้าสู่ระบบ</div>
                    <form action="" className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            
                            <input 
                            {...register("username")} 
                            name="username" type="text" className="w-full py-4 p-2 border border-gry-300 rounded-lg mt-10 text-3xl"placeholder="Username" />
                        </div>
                        <div>
                            <input 
                            {...register("password")}
                            type="password" className="w-full py-4 p-2 border border-gry-300 rounded-lg mt-1 text-3xl"placeholder="Password" />
                        </div>
                        <div>
                            <button className="w-full py-4 bg-purple-btn hover:bg-dark-purple-highlight mt-10  text-white text-bold text-3xl rounded-lg">เข้าสู่ระบบ</button>
                        </div>
                        
                    </form>
                    <div className="text-1xl font-sm mt-2 justify-center text-center">มีปัญหาในการเข้าสู่ระบบ? <a href="#" className="font-medium text-black underline  hover:no-underline">ติดต่อผู้ขาย</a></div>

                </div>
            </div>

    )
}
export default Login;