import React from "react"

interface type {
    date: string,
    income: number
}

function IncomeBox({ date, income }: type) {
    return (
        <div className="w-4/5 bg-white drop-shadow-md rounded-xl flex justify-between items-center py-6 text-xl px-10">
            <p><span>วันที่ </span><span>{date}</span></p>
            <p><span>{income}</span><span> บาท</span></p>
        </div>
    )
}

export default IncomeBox;