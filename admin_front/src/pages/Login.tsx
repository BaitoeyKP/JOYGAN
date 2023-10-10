import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import axios from 'axios';


interface FormData{
    id:number
    data:[];
    username:string;
    password:string;
};

//http://10.66.11.55:3000/admin/user/login
function Login(){

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{e.preventDefault();
        axios({
            method:'post',
            url:'http://10.66.5.253:3000/admin/user/login',
            data:{
                username: username,
                password: password

            },
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOGUwNzNlYzktNGEwOS00NjI0LWJmOGQtMmRjMzE2MDZmZWEwIiwiaWF0IjoxNjk1ODkzMzY1fQ.vt1a_XFIEr8nZYjQwgEp0X9GG0Ni3jzf4XJVzG3kAtc'
            },
        }).then((res)=>{
            console.log()
        }).catch((error)=>{
            console.log(error)
        })
    };
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("")
    return(
            <div className="min-h-screen bg-cream-bg flex flex-col justtify-center font-kanit ">  
                <div className="max-w-md w-full mx-auto  bg-white p-8 border border-gray-300 rounded-lg shadow-lg ">
                    <div className="text-5xl font-bold mt-2 justify-center text-center">เข้าสู่ระบบ</div>
                    <form  className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <input 
                            onChange={e=>setUsername(e.target.value)}
                            // {...register("username")} 
                            name="username" type="text" className="w-full py-4 p-2 border border-gry-300 rounded-lg mt-10 text-3xl"placeholder="Username" />
                        </div>
                        <div>
                            <input 
                            onChange={e=>setPassword(e.target.value)}
                            // {...register("password")}
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