interface type {
    username: string;
    amount: number;
}

function TopSpenderMonitor({ username, amount }: type) {
    return (
        <div className="bg-purple-btn rounded-2xl text-white w-10/12 p-3 text-xl">
            <p className="flex justify-between">
                <span>@{username}</span>
                <span>{amount} บาท</span>
            </p>
        </div>
    )
}

export default TopSpenderMonitor;