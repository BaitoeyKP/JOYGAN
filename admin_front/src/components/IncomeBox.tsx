import React from "react"

interface type {
    // data: {
    date: string;
    income: number;
    // }[];
}

// function IncomeBox({ data }: type) {
function IncomeBox({ date, income }: type) {
    return (
        <div className="w-4/5 my-3">
            {/* {data.map((info, index) => {
                return (
                    <div key={index} className="bg-white drop-shadow-md rounded-xl flex justify-between items-center py-8 text-xl px-10">
                        <p><span>วันที่ </span><span>{info.date}</span></p>
                        <p><span>{info.income}</span><span> บาท</span></p>
                    </div>
                );
            })} */}
            <div className="bg-white drop-shadow-md rounded-xl flex justify-between items-center py-8 text-xl px-10">
                <p><span>วันที่ </span><span>{date}</span></p>
                <p><span>{income}</span><span> บาท</span></p>
            </div>
        </div>
    )
}

export default IncomeBox;