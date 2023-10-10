import React from "react"

interface type {
    day: string;
    month: string;
    year: number;
    income: number;
}

function IncomeBoxDaily({ day, month, year, income }: type) {
    return (
        <div className="w-4/5 my-3">
            <div className="bg-white drop-shadow-md rounded-xl flex justify-between items-center py-8 text-xl px-10">
                <p><span>วันที่ </span><span>{day} {month} {year}</span></p>
                <p><span>{income}</span><span> บาท</span></p>
            </div>
        </div>
    )
}

export default IncomeBoxDaily;