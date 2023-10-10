interface type {
    username: string;
    totalamount: number;
}

function TopSpenderMonitor({ username, totalamount }: type) {
    return (
        <div className="bg-purple-btn rounded-2xl text-white w-10/12 p-3 text-xl">
            <p className="flex justify-between">
                <span>@{username}</span>
                <span>{totalamount} บาท</span>
            </p>
        </div>
    )
}

export default TopSpenderMonitor;