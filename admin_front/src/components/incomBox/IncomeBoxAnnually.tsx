import React from "react"

interface type {
    year: number;
    income: number;
}

function IncomeBoxAnnually({ year, income }: type) {
    return (
        <div className="w-4/5 my-3">
            <div className="bg-white drop-shadow-md rounded-xl flex justify-between items-center py-8 text-xl px-10">
                <p>ปี {year}</p>
                <p><span>{income}</span><span> บาท</span></p>
            </div>
        </div>
    )
}

export default IncomeBoxAnnually;