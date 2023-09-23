import React from "react";

interface TopDonaterListProps {
  topDonaters: TopDonator[];
}

interface TopDonator {
  username: string;
  donate: number;
}

const TopDonaterList: React.FC<TopDonaterListProps> = ({ topDonaters }) => {
  // Sort the topDonaters array in descending order based on the donate
  const sortedDonaters = [...topDonaters].sort((a, b) => b.donate - a.donate);

  return (
    <div>
      <div id="HeaderBox" className="flex flex-col items-center">
        <h1 className="items-center my-2 font-bold">ยอดผู้สนับสนุนสูงสุด</h1>
      </div>
      <div id="TopDonaterLists" className="flex flex-col content-between">
        {sortedDonaters.map((donator, index) => (
          <div id="nameAmt" className="flex justify-between my-1" key={index}>
            <h2 className="font-bold">@{donator.username}</h2>
            <h3 className="text-purple-btn font-semibold">
              {donator.donate.toLocaleString()} บาท
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDonaterList;
