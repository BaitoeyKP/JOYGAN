import qrCode from "../assets/qrCode.png"
import TopSpenderMonitor from "../components/TopSpenderMonitor"
import monitorImg from "../assets/monitorPic.jpg"

const data = [
    { usename: "username1", amount: 10000 },
    { usename: "username2", amount: 1000 },
    { usename: "username3", amount: 100 },
    { usename: "username4", amount: 10 },
    { usename: "username5", amount: 1 },
]

function Monitor() {
    let storeName = "abc";
    let storeCode = "123456";
    let caption = "Lorem ipsum dolor sit amet, consectetur cras amet.";

    return (
        <div className="flex bg-cream-bg min-h-screen h-full w-screen">
            <div className="flex basis-1/2 justify-center items-center flex-col gap-6">
                <p>
                    <span className="text-7xl font-semibold">ร้าน{storeName} </span>
                    <span className="text-5xl font-normal">({storeCode})</span>
                </p>
                <img src={monitorImg} alt="" className="w-[555px] h-[555px] object-cover rounded-xl"/>
                <p className="text-5xl font-normal text-center w-[555px]">{caption}</p>
            </div>
            <div className="flex basis-1/2 justify-center items-center flex-col">
                <div className="flex basis-1/2 justify-center items-center flex-col">
                    <h1 className="text-5xl font-bold font-black-text mb-4">ยอดสนับสนุนสูงสุด</h1>
                    <div className="w-full flex flex-col items-center gap-4">{
                        data.map((info, index) => (
                            <TopSpenderMonitor key={index} username={info.usename} amount={info.amount}></TopSpenderMonitor>
                        ))
                    }</div>
                </div>
                <div className="flex basis-1/2 justify-center items-center flex-col">
                    <img src={qrCode} alt="" className="w-1/2 mb-6 rounded-xl" />
                    <p className="text-5xl font-bold font-black-text">ดาวน์โหลดแอปพลิเคชั่น</p>
                </div>
            </div>
        </div>
    )
}

export default Monitor