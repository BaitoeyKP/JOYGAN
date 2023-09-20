import IncomeBox from "../components/IncomeBox"

const data = [
    {date:"16 กรกฎาคม 2562", income:9990},
    {date:"16 กรกฎาคม 2562", income:9990},
    {date:"16 กรกฎาคม 2562", income:9990},
    {date:"16 กรกฎาคม 2562", income:9990},
]

function Income() {
    return (
        <div className="bg-cream-bg h-screen w-screen">
            <div className="flex justify-center"><IncomeBox data={data}></IncomeBox></div>
        </div>
    )
}

export default Income