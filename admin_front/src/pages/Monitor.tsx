import qrCode from "../assets/qrCode.png"
import TopSpenderMonitor from "../components/TopSpenderMonitor"
import monitorImg from "../assets/monitorPic.jpg"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

function Monitor() {
    const [storeName, setStoreName] = useState("ABC");
    const [storeCode, setStoreCode] = useState(null);
    const [caption, setCaption] = useState(null);
    const [topSpender, setTopSpender] = useState(<></>);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://10.66.5.253:3000/admin/content/top-donators',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOGUwNzNlYzktNGEwOS00NjI0LWJmOGQtMmRjMzE2MDZmZWEwIiwiaWF0IjoxNjk1ODkzMzY1fQ.vt1a_XFIEr8nZYjQwgEp0X9GG0Ni3jzf4XJVzG3kAtc'
            }
        }).then((res) => {
            console.log("top donator");
            console.log(res.data[0].username)
            const data = [
                { username: res.data[0].username, totalamount: res.data[0].totalamount },
                { username: res.data[1].username, totalamount: res.data[1].totalamount },
                { username: res.data[2].username, totalamount: res.data[2].totalamount },
                { username: res.data[3].username, totalamount: res.data[3].totalamount },
                { username: res.data[4].username, totalamount: res.data[4].totalamount },
            ]
            setTopSpender(
                <div className="w-full flex flex-col items-center gap-4">
                    {data.map((info, index) => (
                        <TopSpenderMonitor key={index} username={info.username} totalamount={info.totalamount}></TopSpenderMonitor>
                    ))}
                </div>
            )
        });
    }, []);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://10.66.5.253:3000/admin/user/getcode',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOGUwNzNlYzktNGEwOS00NjI0LWJmOGQtMmRjMzE2MDZmZWEwIiwiaWF0IjoxNjk1ODkzMzY1fQ.vt1a_XFIEr8nZYjQwgEp0X9GG0Ni3jzf4XJVzG3kAtc'
            }
        }).then((res) => {
            // console.log("code : " + res.data.code);
            setStoreCode(res.data.code)
        });
    }, []);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://10.66.5.253:3000/admin/content/show',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOGUwNzNlYzktNGEwOS00NjI0LWJmOGQtMmRjMzE2MDZmZWEwIiwiaWF0IjoxNjk1ODkzMzY1fQ.vt1a_XFIEr8nZYjQwgEp0X9GG0Ni3jzf4XJVzG3kAtc'
            }
        }).then((res) => {
            // console.log("content : " + res.data.text);
            setCaption(res.data.text)
        });
    }, []);

    return (
        <div className="flex bg-cream-bg min-h-screen h-full w-screen">
            <div className="flex basis-1/2 justify-center items-center flex-col gap-7">
                <Link to="/" className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        className="mt-2"
                    >
                        <path d="M7.20508 19.0449C6.35059 18.1904 6.35059 16.8027 7.20508 15.9483L20.3301 2.82326C21.1846 1.96877 22.5723 1.96877 23.4268 2.82326C24.2813 3.67775 24.2813 5.06544 23.4268 5.91994L11.8467 17.5L23.4199 29.0801C24.2744 29.9346 24.2744 31.3223 23.4199 32.1768C22.5654 33.0312 21.1777 33.0312 20.3232 32.1768L7.19824 19.0518L7.20508 19.0449Z" fill="#393939" />
                    </svg>
                    <p className="text-black-text">
                        <span className="text-7xl font-semibold">ร้าน{storeName} </span>
                        <span className="text-5xl font-normal">({storeCode})</span>
                    </p>
                </Link>
                <img src={monitorImg} alt="" className="w-[555px] h-[555px] object-cover rounded-xl" />
                <p className="text-5xl font-normal text-center w-[555px] text-black-text h-[23%] flex items-center justify-center flex-wrap break-all">{caption}</p>
            </div>
            <div className="flex basis-1/2 justify-center items-center flex-col">
                <div className="flex basis-1/2 justify-center items-center flex-col">
                    <h1 className="text-5xl font-bold font-black-text mb-4 text-black-text">ยอดสนับสนุนสูงสุด</h1>
                    <div className="w-full">{topSpender}</div>
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