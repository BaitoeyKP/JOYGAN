import { Link } from "react-router-dom"
import IncomeBox from "../components/IncomeBox"

const data = [
    { date: "16 กรกฎาคม 2562", income: 9990 },
    { date: "16 กรกฎาคม 2562", income: 9990 },
    { date: "16 กรกฎาคม 2562", income: 9990 },
    { date: "16 กรกฎาคม 2562", income: 9990 },
]

function Income() {
    return (
        <div className="bg-cream-bg h-screen w-screen">
            <div className="flex justify-center pt-20">
                <div className="w-4/5 flex justify-between py-6">
                    <Link to="/">
                        <div className="flex items-center bg-purple-btn py-3 px-4 rounded-xl hover:opacity-80 drop-shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.5 5L7.5 10L12.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="text-white text-base">กลับไปหน้าแดชบอร์ด</span>
                        </div>
                    </Link>
                    <h1 className="text-center text-5xl font-bold">จำนวนเงินเข้าย้อนหลังรายวัน</h1>
                    <div className="flex items-center bg-purple-btn py-3 px-4 rounded-xl drop-shadow-md">
                        <span className="text-white">รายวัน</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                {/* <IncomeBox data={data}></IncomeBox> */}
                {data.map((info, index) => {
                    return (
                        <IncomeBox key={index} date={info.date} income={info.income}></IncomeBox>
                    );
                })}
            </div>
        </div>
    )
}

export default Income