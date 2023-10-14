import React, { useState, useEffect } from "react";
import IconButton from "./IconButton";
import { Link } from "react-router-dom";
import axios from 'axios';

interface Store {
  name: string;
  code: any;
}

interface StoreNameProps {
  store: Store;
  handleNameClick: () => void;
}

const StoreName: React.FC<StoreNameProps> = ({ store, handleNameClick }) => {
  const [caption, setCaption] = useState("");
    const ipAddress = '127.0.0.1';

    useEffect(() => {
        // //console.log(localStorage.getItem("JWT"));

        axios({
            method: 'get',
            url: `http://${ipAddress}:8000/admin/user/displayname`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("JWT")}`
            }
        }).then((res) => {
            // //console.log("content : " + res.data.text);
            // //console.log("name",res.data);
            setCaption(res.data)
            

        });
    }, []);


    // const handleSave = () => {
    //     // สร้างข้อมูลที่จะส่งไปยังเซิร์ฟเวอร์
    //     const data = {
    //       editText: caption,
    // };

    const handleSubmit = () => {
        // //console.log("test")
        axios({
            method: 'patch',
            url: `http://${ipAddress}:8000/admin/content/show/${caption}`,

            headers: {
                Authorization: `Bearer ${localStorage.getItem("JWT")}`
            },
        }).then((res) => {
            // //console.log(res.data);
            // localStorage.setItem("JWT",res.data.access_token);
        }).catch((error) => {
            // //console.log(error)
        })
    };

  return (
    <h1 className="text-4xl flex flex-row items-end">
      ร้าน
      <span className="text-5xl text-dark-purple-highlight">{store.name}</span>
      <span>({store.code})</span>
      <div className="cursor-pointer" onClick={handleNameClick} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >

          <g
            fill="none"
            stroke="#a3a0a0"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3" />
          </g>
        </svg>
      </div>
    </h1>
  );
};

export default StoreName;
