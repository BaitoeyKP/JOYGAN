import React, { useEffect, useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import DaysLeft from "../components/DaysLeft";
import RefreshIcon from "../components/RefreshIcon";
import TodayIncome from "../components/TodayIncome";
import CurrentText from "../components/CurrentText";
import AreaChartCard from "../components/AreaChartCard";
import StoreName from "../components/StoreName";
import TopDonaterList from "../components/TopDonaterList";
import ConfirmDialog from "../components/ConfirmDialog";
import QRCodeDisplay from "../components/QRCodeDisplay";
import QueueComponent from "../components/Queue";
import EditQR from "../components/modalEdit/EditQR";
import EditShow from "../components/modalEdit/EditShow";
import EditName from "../components/modalEdit/EditName";
import axios from "axios";
import { time } from "console";


const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalShow, setShowModalShow] = useState(false);
  const [showModalName, setShowModalName] = useState(false);
  const [storeCode, setStoreCode] = useState(null);
  const [expireDate, setExpireDate] = useState(0);
  const [topSpender, setTopSpender] = useState(<></>);

  //outside grid
  const ipAddress = '10.66.14.173';

  interface fetchdata {
  
    id:string;
    pic:string;
    state:string;
    text:string;
    time_display:number;
    time_stamp:number;
    
    
  }
  const [Data, setData] = useState<fetchdata>();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${ipAddress}:3000/admin/user/getcode`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      setStoreCode(res.data.code)
    });
  }, []);

  const TavernData = {
    name: "ABC",
    code: storeCode,
  };

  const refreshDateTime = "15/09/2023 23:43"; // Replace with your actual date and time

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${ipAddress}:3000/admin/user/expire`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      console.log(res.data.expire);
      const currentDate = Math.floor(new Date().getTime() / 1000);
      let dayleft = Math.round((res.data.expire - currentDate) / (60 * 60 * 24));
      setExpireDate(dayleft);
      console.log("dayleft : " + dayleft);
    });
  }, []);

  const license = {
    expire: `${expireDate}`,
  };

  //card 1
  const [totalToday, setTotalToday] = useState(0);
  const [morethan, setMorethan] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {

    axios({
      method: 'get',
      url: `http://${ipAddress}:3000/admin/content/summary-donate`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      console.log(res.data, 1234567890);
      setTotalToday(res.data.totalToday);
      setMorethan(res.data.morethan);
      setPercentage(res.data.percentage);
    });
  }, []);




  const handlehistoryClick = () => {
    console.log("Income History clicked!...");
  };
  //card 2
  // State to control the visibility of the confirmation dialog
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  
  const handleEditClick = () => {
    // Handle edit action here
    setShowModalShow(true)

  };
  const handleRemoveClick = () => {
    // Handle remove action here
    console.log("Remove button clicked!");
    // Display the confirmation dialog
    setShowConfirmDialog(true);
  };
  // Function to handle confirmation of removal
  const handleConfirmRemove = () => {
    // Handle the removal action here
    console.log("Removing...");
    // Hide the confirmation dialog
    setShowConfirmDialog(false);
  };
  // Function to handle canceling removal
  const handleCancelRemove = () => {
    console.log("Canceling...");
    // Hide the confirmation dialog
    setShowConfirmDialog(false);
  };
  //card 3
  const chartData = {
    xAxisLabels: [
      "12/Sep",
      "13/Sep",
      "14/Sep",
      "15/Sep",
      "16/Sep",
      "17/Sep",
      "18/Sep",
    ],
    yAxisData: [150, 134, 123, 111, 95, 90, 120],
  };
  //card 4
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${ipAddress}:3000/admin/content/top-donators`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      const data = []
      for (let i = 0; i < Math.min(10, res.data.length); i++) {
        data.push({ username: res.data[i].username, totalamount: res.data[i].totalamount })
      }
      setTopSpender(
        <div className="flex flex-col gap-y-3.5">
          {data.map((info, index) => (
            <TopDonaterList key={index} username={info.username} totalamount={info.totalamount}></TopDonaterList>
          ))}
        </div>
      )
    });
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("JWT"));
    
      axios({
          method: 'get',
          url: `http:///${ipAddress}:3000/admin/content/show`,
          headers: {
            Authorization:`Bearer ${localStorage.getItem("JWT")}` 
          }
      }).then((res) => {
          // console.log("content : " + res.data.text);
          setData(res.data)
          console.log("show",res);
          
      });
      }, []);

      const [nameMaket, setNameMaket] = useState("");

      useEffect(() => {
        console.log(localStorage.getItem("JWT"));

        axios({
            method: 'get',
            url: `http://${ipAddress}:3000/admin/user/displayname`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("JWT")}`
            }
        }).then((res) => {
            // console.log("content : " + res.data.text);
            console.log("nameMaket",res.data);
            setNameMaket(res.data)
        });
    }, []);


  //card 5 data and function
  const queueData = [
    {
      id: 2,
      username: 'UsernameA', // Include the username here
      text: 'Basic usage Showing content that overflows Use overflow-visible to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.',
      time: 120,
      donate: 10000,
      imageSrc: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      username: 'UsernameB', // Include the username here
      text: 'ง่วงจังเลย',
      time: 45,
      donate: 1000,
      imageSrc: 'https://picsum.photos/1080/720',
    },
    {
      id: 4,
      username: 'UsernameC', // Include the username here
      text: 'ง่วงจังเลย',
      time: 145,
      donate: 1000,
      imageSrc: 'https://picsum.photos/836/739',
    },
  ];
  //card 6 data and function
  const handleQrClick = () => {
    setShowModal(true)
  };
  const handleNameClick = () => {
    setShowModalName(true)
  };
  const account = {
    name: "สุปรีญา อรุณฉาย",
    number: "7070148614333071",
  };
  if (!totalToday)
    return;
  const incomeData = {
    total: totalToday,
    morethan: morethan,
    morethanper: percentage,
  };

  if(!Data)
    return 'no data';
  console.log(Data.time_display);
  const getData = {
    id: 1,
    username: "nut",
    text: "โอ๊ตรวยเลี้ยงชาบูหน่อย",
    imagesrc:
      "https://picsum.photos/304/650",
    time: Data!.time_display, // 45 minutes
    donate: 1000,
  };
  return (
    <div className="bg-cream-bg font-kanit p-6 min-h-screen">
      <div className="flex justify-between mx-10 pt-5">
        <StoreName store={TavernData} handleNameClick={handleNameClick} />
        <ToggleSwitch onText="เปิดระบบ" offText="ปิดระบบ" />
      </div>
      <div className="flex flex-row justify-between items-center mx-10 my-6 font-['kanit'] ">
        <RefreshIcon dateTime={refreshDateTime} />
        <DaysLeft Day={license} />
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-10 pb-10"
        id="grid-container"
      >
        {/* Card 1 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md flex flex-col"
          style={{ height: "300px" }}
        >
          <TodayIncome incomeData={incomeData} onIncomehistoryClick={handlehistoryClick} />
        </div>

        {/* Card 2 */}
        <div
          className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          <CurrentText
            data={getData}
            onEditClick={handleEditClick}
            onRemoveClick={handleRemoveClick}
          />
        </div>

        {/* Card 3 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          <AreaChartCard chartData={chartData} />
        </div>

        {/* Card 4 */}

        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <div id="HeaderBox" className="flex flex-col items-center">
            <h1 className="items-center my-2  text-2xl font-bold">ยอดผู้สนับสนุนสูงสุด</h1>
          </div>
          {topSpender}
        </div>

        {/* Card 5 */}
        <div className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <div className=" flex flex-col items-center space-y-2">
            <h1 className=" text-xl font-bold  mt-2">ข้อความถัดไป</h1>
            <QueueComponent queue={queueData} handleRemoveClick={handleRemoveClick} />
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <QRCodeDisplay account={account} handleQrClick={handleQrClick} />
        </div>
      </div>
      {/* ConfirmDialog component */}
      {showConfirmDialog && (
        <ConfirmDialog
          message="ยกเลิกการแสดงขึ้นจอ"
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
      <EditQR isOpen={showModal} toggle={() => setShowModal(!showModal)}></EditQR>
      <EditShow isOpenShow={showModalShow} toggle={() => setShowModalShow(!showModalShow)}></EditShow>
      <EditName isOpenName={showModalName} toggle={() => setShowModalName(!showModalName)}></EditName>
    </div>
  );
};

export default Dashboard;
