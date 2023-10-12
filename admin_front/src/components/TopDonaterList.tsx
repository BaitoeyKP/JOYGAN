import React from "react";

interface type {
  username: string;
  totalamount: number;
}

function TopDonaterList({ username, totalamount }: type) {
  return (
    <div>
      <div className="text-black-text text-xl font-bold">
        <p className="flex justify-between">
          <span>@{username}</span>
          <span className="font-normal text-dark-purple-highlight">{totalamount} บาท</span>
        </p>
      </div>
    </div>
  );
};

export default TopDonaterList;
