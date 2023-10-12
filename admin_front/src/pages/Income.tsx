import { Link } from "react-router-dom"
import IncomeBoxDaily from "../components/incomBox/IncomeBoxDaily"
import { useEffect, useState } from "react"
import IncomeBoxMonthly from "../components/incomBox/IncomeBoxMonthly"
import IncomeBoxAnnually from "../components/incomBox/IncomeBoxAnnually"
import axios from "axios"

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
    const [selectedValue, setSelectedValue] = useState(localStorage.getItem("selectedValue") || "daily");
    const [content, setContent] = useState(<></>);
    const ipAddress = '10.66.14.173';
    // const ipAddress = process.env.IP

    useEffect(() => {
        console.log("ip : " + process.env.IP);

        localStorage.setItem("selectedValue", selectedValue);
        axios({
            method: 'get',
            url: `http://${ipAddress}:3000/admin/content/donations-by-day`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("JWT")}`
            }
        }).then((res) => {
            console.log(res.data)
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
            else if (selectedValue === "monthly") {
                setTitle("รายเดือน");
                const dataMonthly = [];
                for (let i = 0; i < res.data.length; i++) {
                    let ddmmyyyy = res.data[i].date.split("-");
                    let year = parseInt(ddmmyyyy[0]) + 543;
                    let month = monthName(ddmmyyyy[1]);
                    const j = dataMonthly.findIndex((x) => x.year === year && x.month === month);
                    console.log(j);
                    if (j === -1) {
                        dataMonthly.push({ month: month, year: year, income: parseInt(res.data[i].totaldonations) })
                    }
                    else
                        dataMonthly[j].income += parseInt(res.data[i].totaldonations)
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
                const dataYear = [];
                for (let i = 0; i < res.data.length; i++) {
                    let ddmmyyyy = res.data[i].date.split("-");
                    let year = parseInt(ddmmyyyy[0]) + 543;
                    const j = dataYear.findIndex((x) => x.year === year);
                    console.log(j);
                    if (j === -1) {
                        dataYear.push({ year: year, income: parseInt(res.data[i].totaldonations) })
                    }
                    else
                        dataYear[j].income += parseInt(res.data[i].totaldonations)
                    // console.log(res.data);
                }
                setContent(
                    <div className="w-full flex flex-col items-center">
                        {dataYear.map((info, index) => (
                            <IncomeBoxAnnually key={index} year={info.year} income={info.income} />
                        ))}
                    </div>
                );
            }
        });
    }, [selectedValue]);

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
                    <select
                        className="flex items-center bg-purple-btn py-3 px-2 w-44 rounded-xl drop-shadow-md text-white"
                        onChange={event => setSelectedValue(event.target.value)}
                        value={selectedValue}
                    >
                        <option value="daily" className="text-white">รายวัน</option>
                        <option value="monthly" className="text-white">รายเดือน</option>
                        <option value="annually" className="text-white">รายปี</option>
                    </select>
                </div>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Income