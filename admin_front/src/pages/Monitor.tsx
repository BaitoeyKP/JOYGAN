// import qrCode from "../assets/qrCode.png"

function Monitor() {
    return (
        <div className="flex bg-cream-bg min-h-screen h-full w-screen">
            <div className="flex basis-1/2 justify-center items-center">

            </div>
            <div className="flex basis-1/2 justify-center items-center flex-col">
                <div className="flex basis-1/2 justify-center items-center">
                    <h1 className="text-5xl font-bold font-black-text">ยอดสนับสนุนสูงสุด</h1>
                </div>
                <div className="flex basis-1/2 justify-center items-center">
                    <img src={qrCode} alt="" />
                    <p className="text-5xl font-bold font-black-text">ดาวน์โหลดแอปพลิเคชั่น</p>
                </div>
            </div>
        </div>
    )
}

export default Monitor