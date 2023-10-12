import { Link } from "react-router-dom"
import IncomeBoxDaily from "../components/incomBox/IncomeBoxDaily"
import { useEffect, useState } from "react"
import IncomeBoxWeekly from "../components/incomBox/IncomeBoxWeekly"
import IncomeBoxMonthly from "../components/incomBox/IncomeBoxMonthly"
import IncomeBoxAnnually from "../components/incomBox/IncomeBoxAnnually"
import axios from "axios"

const dataWeekly = [
    { date: "4 กันยายน 2566 - 10 กันยายน 2566", income: 19990 },
    { date: "4 กันยายน 2566 - 10 กันยายน 2566", income: 19990 },
    { date: "4 กันยายน 2566 - 10 กันยายน 2566", income: 19990 },
    { date: "4 กันยายน 2566 - 10 กันยายน 2566", income: 19990 },
]

const dataMonthly = [
    { month: "มกรารคม", year: 2566, income: 85648 },
    { month: "มกรารคม", year: 2566, income: 85648 },
    { month: "มกรารคม", year: 2566, income: 85648 },
]

const dataAnnually = [
    { year: 2566, income: 324323 },
    { year: 2566, income: 324323 },
]

function monthName(monthNum: string) {
    let monthName = "";
    if (monthNum === "01") {
        monthName = "มกราคม"
    }
    else if (monthNum === "02") {
        monthName = "กุมภาพันธ์"
    }
    else if (monthNum === "03") {
        monthName = "มีนาคม"
    }
    else if (monthNum === "04") {
        monthName = "เมษายน"
    }
    else if (monthNum === "05") {
        monthName = "พฤษภาคม"
    }
    else if (monthNum === "06") {
        monthName = "มิถุนายน"
    }
    else if (monthNum === "07") {
        monthName = "กรกฎาคม"
    }
    else if (monthNum === "08") {
        monthName = "สิงหาคม"
    }
    else if (monthNum === "09") {
        monthName = "กันยายน"
    }
    else if (monthNum === "10") {
        monthName = "ตุลาคม"
    }
    else if (monthNum === "11") {
        monthName = "พฤศจิกายน"
    }
    else if (monthNum === "12") {
        monthName = "ธันวาคม"
    }
    return monthName;
}

function Income() {
    const [title, setTitle] = useState("รายวัน");
    const [selectedValue, setSelectedValue] = useState("daily");
    const [content, setContent] = useState(<></>);
    const ipAddress = '127.0.0.1';

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://${ipAddress}:8000/admin/content/donations-by-day`,
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOGUwNzNlYzktNGEwOS00NjI0LWJmOGQtMmRjMzE2MDZmZWEwIiwiaWF0IjoxNjk1ODkzMzY1fQ.vt1a_XFIEr8nZYjQwgEp0X9GG0Ni3jzf4XJVzG3kAtc'
            }
        }).then((res) => {
            // console.log(res.data)
            if (selectedValue === "daily") {
                setTitle("รายวัน");
                const dataDaily = [];
                for (let i = 0; i < res.data.length; i++) {
                    let ddmmyyyy = res.data[i].date.split("-");
                    let year = parseInt(ddmmyyyy[0]) + 543;
                    let month = monthName(ddmmyyyy[1]);
                    let dd = ddmmyyyy[2].split("");
                    let day = dd[0] + dd[1];
                    dataDaily.push({ day: day, month: month, year: year, income: res.data[i].totaldonations })
                    // console.log(day + " " + month + " " + year);
                    // console.log(res.data);
                }
                setContent(
                    <div className="w-full flex flex-col items-center">
                        {dataDaily.map((info, index) => (
                            <IncomeBoxDaily key={index} day={info.day} month={info.month} year={info.year} income={info.income} />
                        ))}
                    </div>
                );
            }
            else if (selectedValue === "weekly") {
                setTitle("รายสัปดาห์");
                setContent(
                    <div className="w-full flex flex-col items-center">
                        {dataWeekly.map((info, index) => (
                            <IncomeBoxWeekly key={index} date={info.date} income={info.income} />
                        ))}
                    </div>
                );
            }
            else if (selectedValue === "monthly") {
                setTitle("รายเดือน");
                // const dataMonthly = [];
                // for (let i = 0; i < res.data.length; i++) {
                //     let ddmmyyyy = res.data[i].date.split("-");
                //     let year = parseInt(ddmmyyyy[0]) + 543;
                //     let month = monthName(ddmmyyyy[1]);
                //     let currentMonth = ddmmyyyy[1];
                //     let totalMonth += res.data[i].totaldonations;
                //     // dataDaily.push({ day: day, month: month, year: year, income: res.data[i].totaldonations })

                // }

                // for (let i = 0; i < res.data.length; i++) {
                //     let ddmmyyyy = res.data[i].date.split("-");
                //     let year = parseInt(ddmmyyyy[0]) + 543;
                //     let month = monthName(ddmmyyyy[1]);
                //     let currentMonth = ddmmyyyy[1];
                //     let totalMonth = 0;
                //     while (ddmmyyyy[1] === currentMonth) {
                //         totalMonth += parseInt(res.data[i].totaldonations)
                //     }
                //     // dataMonthly.push({ month: month, year: year, income: totalMonth })
                // }

                const dataMonthly = [];
                let totalMonth = 0;
                for (let i = 0; i < res.data.length; i++) {
                    let ddmmyyyy = res.data[i].date.split("-");
                    let year = parseInt(ddmmyyyy[0]) + 543;
                    let month = monthName(ddmmyyyy[1]);

                    let currentMonth = parseInt(ddmmyyyy[1]);
                    let nextMonth = currentMonth + 1;
                    // console.log("cur " + currentMonth);
                    // console.log("next " + nextMonth);

                    totalMonth += parseInt(res.data[i].totaldonations);
                    // console.log("donation" + res.data[i].totaldonations);

                    console.log("daily " + res.data[i].totaldonations + " toalMonth " + totalMonth);


                    dataMonthly.push({ month: month, year: year, income: totalMonth })
                    // console.log(res.data);
                }
                setContent(
                    <div className="w-full flex flex-col items-center">
                        {dataMonthly.map((info, index) => (
                            <IncomeBoxMonthly key={index} month={info.month} year={info.year} income={info.income} />
                        ))}
                    </div>
                );
            }
            else if (selectedValue === "annually") {
                setTitle("รายปี");
                setContent(
                    <div className="w-full flex flex-col items-center">
                        {dataAnnually.map((info, index) => (
                            <IncomeBoxAnnually key={index} year={info.year} income={info.income} />
                        ))}
                    </div>
                );
            }
        });
    }, [selectedValue]);

    // useEffect(() => {
    //     if (selectedValue === "daily") {
    //         setTitle("รายวัน");
    //         setContent(
    //             <div className="w-full flex flex-col items-center">
    //                 {dataDaily.map((info, index) => (
    //                     <IncomeBoxDaily key={index} date={info.date} income={info.income} />
    //                 ))}
    //             </div>
    //         );
    //     } else if (selectedValue === "weekly") {
    //         setTitle("รายสัปดาห์");
    //         setContent(
    //             <div className="w-full flex flex-col items-center">
    //                 {dataWeekly.map((info, index) => (
    //                     <IncomeBoxWeekly key={index} date={info.date} income={info.income} />
    //                 ))}
    //             </div>
    //         );
    //     } else if (selectedValue === "monthly") {
    //         setTitle("รายเดือน");
    //         setContent(
    //             <div className="w-full flex flex-col items-center">
    //                 {dataMonthly.map((info, index) => (
    //                     <IncomeBoxMonthly key={index} month={info.month} year={info.year} income={info.income} />
    //                 ))}
    //             </div>
    //         );
    //     } else if (selectedValue === "annually") {
    //         setTitle("รายปี");
    //         setContent(
    //             <div className="w-full flex flex-col items-center">
    //                 {dataAnnually.map((info, index) => (
    //                     <IncomeBoxAnnually key={index} year={info.year} income={info.income} />
    //                 ))}
    //             </div>
    //         );
    //     }
    // },[selectedValue]);

    return (
        <div className="bg-cream-bg min-h-screen h-full w-screen">
            <div className="flex justify-center pt-20">
                <div className="w-4/5 flex justify-between py-6">
                    <Link to="/" className="flex items-center justify-center bg-purple-btn py-3 w-44 rounded-xl hover:opacity-80 drop-shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 5L7.5 10L12.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="text-white text-base">กลับไปหน้าแดชบอร์ด</span>
                    </Link>
                    <h1 className="text-center text-5xl font-bold">จำนวนเงินเข้าย้อนหลัง{title}</h1>
                    {/* <div className="flex items-center bg-purple-btn py-3 px-4 rounded-xl drop-shadow-md">
                        <span className="text-white">รายวัน</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div> */}
                    <select
                        className="flex items-center bg-purple-btn py-3 px-2 w-44 rounded-xl drop-shadow-md text-white"
                        onChange={event => setSelectedValue(event.target.value)}
                    >
                        <option value="daily" className="text-white">รายวัน</option>
                        <option value="weekly" className="text-white">รายสัปดาห์</option>
                        <option value="monthly" className="text-white">รายเดือน</option>
                        <option value="annually" className="text-white">รายปี</option>
                    </select>
                </div>
            </div>
            <div>
                {/* <IncomeBoxDaily data={dataDaily}></IncomeBoxDaily> */}
                {/* {dataDaily.map((info, index) => {
                    return (
                        <IncomeBoxDaily key={index} date={info.date} income={info.income}></IncomeBoxDaily>
                    );
                })} */}
                {content}
            </div>
        </div>
    )
}

export default Income