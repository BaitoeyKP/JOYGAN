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

function monthName(monthNum: string) {
  let monthName = "";
  if (monthNum === "01") {
    monthName = "ม.ค."
  }
  else if (monthNum === "02") {
    monthName = "ก.พ."
  }
  else if (monthNum === "03") {
    monthName = "ม.ค."
  }
  else if (monthNum === "04") {
    monthName = "เม.ย."
  }
  else if (monthNum === "05") {
    monthName = "พ.ค."
  }
  else if (monthNum === "06") {
    monthName = "มิ.ย."
  }
  else if (monthNum === "07") {
    monthName = "ก.ค."
  }
  else if (monthNum === "08") {
    monthName = "ส.ค."
  }
  else if (monthNum === "09") {
    monthName = "ก.ย."
  }
  else if (monthNum === "10") {
    monthName = "ต.ค."
  }
  else if (monthNum === "11") {
    monthName = "พ.ย."
  }
  else if (monthNum === "12") {
    monthName = "ธ.ค."
  }
  return monthName;
}

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalShow, setShowModalShow] = useState(false);
  const [showModalName, setShowModalName] = useState(false);
  const [storeCode, setStoreCode] = useState(null);
  const [qrshop, setQRshop] = useState();
  const [expireDate, setExpireDate] = useState(0);
  const [topSpender, setTopSpender] = useState<JSX.Element | undefined>();
  const [refresh, setRefresh] = useState(0);
  //outside grid
  const ipAddress = '127.0.0.1';

  interface fetchdata {

    id: string;
    pic: string;
    state: string;
    text: string;
    time_display: number;
    time_stamp: number;
    donate: number;
    user: {
      id: number;
      username: string;
    }

  }
  const [deletequeue, setDeletequeue] = useState<string>('');
  const [Data, setData] = useState<fetchdata>();
  const [queueData, setDataQueue] = useState<fetchdata[] | undefined>([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${ipAddress}:8000/admin/user/getcode`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      setStoreCode(res.data.code)
    });
  }, []);



  const [refreshDateTime, setRefreshDateTime] = useState("");
  useEffect(() => {
    let date = new Date();
    let month = "";
    let hour = "";
    let min = "";
    if (date.getMonth() < 10) {
      month = "0" + date.getMonth();
    }
    else {
      month = date.getMonth().toString();
    }
    if (date.getHours() < 10) {
      hour = "0" + date.getHours();
    }
    else {
      hour = date.getHours().toString();
    }
    if (date.getMinutes() < 10) {
      min = "0" + date.getMinutes();
    }
    else {
      min = date.getMinutes().toString();
    }
    let now = date.getDate() + "/" + month + "/" + date.getFullYear() + " " + hour + ":" + min
    console.log("now : " + now);
    setRefreshDateTime(now);
  }, [refresh])

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${ipAddress}:8000/admin/user/expire`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log(res.data.expire);
      const currentDate = Math.floor(new Date().getTime() / 1000);
      let dayleft = Math.round((res.data.expire - currentDate) / (60 * 60 * 24));
      setExpireDate(dayleft);
      // console.log("dayleft : " + dayleft);
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
      url: `http://${ipAddress}:8000/admin/content/summary-donate`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log(res.data, 1234567890);
      setTotalToday(res.data.totalToday);
      setMorethan(res.data.morethan);
      setPercentage(res.data.percentage);
    });
  }, []);




  const handlehistoryClick = () => {
    // console.log("Income History clicked!...");
  };
  //card 2
  // State to control the visibility of the confirmation dialog
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);


  const handleEditClick = () => {
    // Handle edit action here
    setShowModalShow(true)

  };
  const handleRemoveClick = (itemId: string) => {
    // Handle remove action here
    setDeletequeue(itemId);
    console.log("Remove button clicked!");
    // Display the confirmation dialog
    setShowConfirmDialog(true);
  };
  // Function to handle confirmation of removal
  const handleConfirmRemove = () => {

    console.log(deletequeue, 'deletequeue');

    axios({
      method: 'delete',
      url: `http:///${ipAddress}:8000/admin/content/queue/${deletequeue}`,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      },
    }).then((res) => {
      console.log(res.data);
      window.location.reload();
      // localStorage.setItem("JWT",res.data.access_token);
    }).catch((error) => {
      console.log(error)
    })



    console.log("Removing...");
    // Hide the confirmation dialog
    setShowConfirmDialog(false);
  };
  // Function to handle canceling removal
  const handleCancelRemove = () => {
    // console.log("Canceling...");
    // Hide the confirmation dialog
    setShowConfirmDialog(false);
  };
  //card 3
  const [yAxisData, setYAxisData] = useState<any>();
  const [xAxisLabels, setXAxisLabels] = useState<any>();
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${ipAddress}:8000/admin/content/donations-by-day`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log("income : ", res.data)
      if (res.data.length == 0) return setYAxisData(undefined);
      const yAxisData = [];
      let countx = 0;
      let county = 0;
      for (let index = res.data.length - 1; index >= 0; index--) {
        county++;
        yAxisData.push(res.data[index].totaldonations);
        if (county == 7) {
          break;
        }
      }
      setYAxisData(yAxisData);
      // console.log("y : " + yAxisData);
      const xAxisLabels = [];
      for (let index = res.data.length - 1; index >= 0; index--) {
        let ddmmyyyy = res.data[index].date.split("-");
        let year = parseInt(ddmmyyyy[0]) + 543;
        let month = monthName(ddmmyyyy[1]);
        let dd = ddmmyyyy[2].split("");
        let day = dd[0] + dd[1];
        let date = day + " " + month + " " + year;
        xAxisLabels.push(date);
        countx++;
        if (countx == 7) {
          break;
        }
      }
      // console.log("x : " + xAxisLabels);
      setXAxisLabels(xAxisLabels);
    });
  }, []);

  //card 4
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://${ipAddress}:8000/admin/content/top-donators`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      if (!res.data.length) {
        return setTopSpender(undefined);
      }
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
      url: `http:///${ipAddress}:8000/admin/content/show`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log("content : " + res.data.text);
      setData(res.data)
      console.log("show", res);

    });

    axios({
      method: 'get',
      url: `http:///${ipAddress}:8000/admin/content/queue`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log("content : " + res.data.text);
      if (res.data) {
        setDataQueue(undefined)
      }
      setDataQueue(res.data)
      console.log("queuedata", res);
    });

    axios({
      method: 'get',
      url: `http://${ipAddress}:8000/admin/user/displayname`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log("content : " + res.data.text);
      console.log("nameMaket", res.data);
      setNameMaket(res.data)
    });

    axios({
      method: 'get',
      url: `http://${ipAddress}:8000/admin/user/QR`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log("content : " + res.data.text);
      setQRshop(res.data)
    });
  }, [refresh]);

  const [nameMaket, setNameMaket] = useState("");

  //card 5 data and function

  //card 6 data and function
  const handleQrClick = () => {
    setShowModal(true)
  };
  const handleNameClick = () => {
    setShowModalName(true)
  };


  const incomeData = {
    total: totalToday,
    morethan: morethan,
    morethanper: percentage,
  };





  const TavernData = {
    name: nameMaket,
    code: storeCode,
  }



  return (
    <div className="bg-cream-bg font-kanit p-6 min-h-screen">
      <div className="flex justify-between mx-10 pt-5">
        <StoreName store={TavernData} handleNameClick={handleNameClick} />
        {/* <ToggleSwitch onText="เปิดระบบ" offText="ปิดระบบ" /> */}
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
          {Data ? <CurrentText
            data={Data}
            onEditClick={handleEditClick}
            onRemoveClick={handleRemoveClick}
            setRefresh={setRefresh}
          /> :
          <div className="flex w-full justify-center h-full  items-center">
          ไม่พบข้อมูลที่ต้องการ
        </div>
          }
        </div>

        {/* Card 3 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          {yAxisData ? <AreaChartCard xAxisLabels={xAxisLabels} yAxisData={yAxisData} /> : 
          <div className="flex w-full justify-center h-full  items-center">
          ไม่พบข้อมูลที่ต้องการ
        </div>}

        </div>

        {/* Card 4 */}

        {/* <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <div id="HeaderBox" className="flex flex-col items-center">
            <h1 className="items-center my-2  text-2xl font-bold">ยอดผู้สนับสนุนสูงสุด</h1>
          </div>
          {topSpender?topSpender:<>
          <div className="flex w-full justify-center h-full  items-center">
            ไม่พบข้อมูลที่ต้องการ
          </div>
          </>}
        </div> */}

        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <div id="HeaderBox" className="flex flex-col h-full items-center">
            <h1 className="items-center my-2  text-2xl font-bold">ยอดผู้สนับสนุนสูงสุด</h1>
            {topSpender ? topSpender : <>
              <div className="flex w-full justify-center h-full  items-center">
                ไม่พบข้อมูลที่ต้องการ
              </div>
            </>}
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <div className=" flex flex-col items-center space-y-2  h-full">
            <h1 className=" text-xl font-bold  mt-2">ข้อความถัดไป</h1>
            {queueData && (queueData.length > 0) ? <QueueComponent queue={queueData} handleRemoveClick={handleRemoveClick} /> : 
            <div className="flex w-full justify-center h-full  items-center">
                ไม่พบข้อมูลที่ต้องการ
              </div>}

          </div>
        </div>

        {/* Card 6 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          {qrshop ? <QRCodeDisplay qrshop={qrshop} handleQrClick={handleQrClick} /> : <h1>nodata</h1>}
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
      <EditQR isOpen={showModal} toggle={() => setShowModal(!showModal)} setRefresh={setRefresh}></EditQR>
      <EditShow isOpenShow={showModalShow} toggle={() => setShowModalShow(!showModalShow)}></EditShow>
      <EditName isOpenName={showModalName} toggle={() => setShowModalName(!showModalName)} setRefresh={setRefresh}></EditName>
    </div>
  );
};

export default Dashboard;
