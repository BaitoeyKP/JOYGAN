import IncomeBox from "../components/IncomeBox"

function Income() {
    return (
        <div className="bg-cream-bg h-screen w-screen">
            <div className="flex justify-center"><IncomeBox date={"16 กรกฎาคม 2562"} income={9990}></IncomeBox></div>
        </div>
    )
}

export default Income