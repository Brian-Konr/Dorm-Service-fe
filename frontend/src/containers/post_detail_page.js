import { useParams, Link } from "react-router-dom";
import { Divider } from 'antd';
import { useState, useEffect } from 'react'
import Navigation from '../containers/navigation';
import { Icon } from '@iconify/react';
import {Tag, Button} from 'antd';
import axios from 'axios';


// 加一個參數 myPage
const Post_Detail_Page = ({login,name,setCurrent,current,viewSelf}) => {
const [requestDetail, setRequestDetail] = useState([]);
const [start, setStart] = useState(true);
  
  
  // 以下勿刪除！
  let title = "Title";
  const startActTime = "2020.05.18";
  const endActTime = "2020.05.20";
  const startHireTime = "2020.05.18";
  const endHireTime = "2020.05.20";
  let fee = 100;
  let DetailInfo = "拜託趕快來嗚嗚"
  // 以上勿刪除！





  const actArea = [
    (<p>{requestDetail.length === 0 ? startActTime : requestDetail[0].startActTime}</p>),
    (<Icon icon="ic:baseline-arrow-right" height="10"/>),
    (<p>{requestDetail.length === 0 ? endActTime : requestDetail[0].endActTime}</p>)
  ]
  const hireArea = [
    (<p>{requestDetail.length === 0 ? startHireTime : requestDetail[0].startHireTime}</p>),
    (<Icon icon="ic:baseline-arrow-right" height="10"/>),
    (<p>{requestDetail.length === 0 ? endHireTime : requestDetail[0].endHireTime}</p>)
  ]


  let {serviceId, requestId} = useParams();
  console.log(serviceId, requestId);
  
  
  // 共同區域

  const navBar = (
    <header>
    <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
    </header>
  )
  const item = (title, description) => {
    return(
      <div className = "detailItem">
        <p className =  "detailItemTitle">{title}</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;</p>
        {/* 換行 */}
        {[...description]}
      </div>
    )
  }

  
  
  
  const contentShow_Kill = () => {
    const type = "五隻德國大蟑螂";
    const place = "女一208 浴室ㄉ角落";
    const fly = true;
    const flyText = fly ? "會" : "不會"; 

    if(start){
      getaKillRequest();
      setStart(false);
    }

    console.log(requestDetail.length === 0 ? title : requestDetail[0].title);

    titleArea = (
      <h1 className = "detail_title_Area">
          <div className="detail_title">{requestDetail.length == 0 ? title : requestDetail[0].title}</div>
          <Tag color="volcano" className = "detailTag">打蟑螂</Tag>
      </h1>
      )
      taskArea = (
        <div className="taskAreaContent">
          <div className="detailTitle">
            {taskTitle}
          </div>
          {item("蟑螂類型",[(<p>{type}</p>)])}
          {item("出沒地點",[(<p>{place}</p>)])}
          {item("會不會飛",[(<p>{flyText}</p>)])}
      </div>
      )
  }

  const contentShow_HeavyLifting = () => {
    const startDestination = "女一舍 5樓";
    const endDestination = "女一舍 1樓";
    const distance = "100 m";
    const elevator = true;
    const elevatorText = elevator ? "有" : "沒有"; 
    const type = "十張桌子"
    const weight = "10kg"
   

    if(start){
      getaHeavyLiftingRequest();
      setStart(false);
    }

    titleArea = (
      <h1 className = "detail_title_Area">
        <div className="detail_title">{requestDetail.length == 0 ? title : requestDetail[0].title}</div>
        <Tag color="green" className = "detailTag">物品搬運</Tag>
    </h1>
    )
    taskArea = (
      <div className="taskAreaContent">
        <div className="detailTitle">
          {taskTitle}
        </div>
        {item("預估起點",[(<p>{startDestination}</p>)])}
        {item("預估終點",[(<p>{endDestination}</p>)])}
        {item("預估距離",[(<p>{distance}</p>)])}
        {item("有無電梯",[(<p>{elevatorText}</p>)])}
        {item("物件種類",[(<p>{requestDetail.length == 0 ? type : requestDetail[0].type}</p>)])}
        {item("預估重量",[(<p>{requestDetail.length == 0 ? weight : requestDetail[0].weight}</p>)])}
    </div>
    )

  }

  const contentShow_Drive = () => {
    const startDestination = "女一舍 5樓";
    const endDestination = "女一舍 1樓";
    const distance = "100 m";

    if(start){
      getaDriveRequest();
      setStart(false);
    }

    

    titleArea = (
      <h1 className = "detail_title_Area">
        <div className="detail_title">{requestDetail.length === 0 ? title : requestDetail[0].title}</div>
        <Tag color="geekblue" className="detailTag">載人服務</Tag>
    </h1>
    )
    taskArea = (
      <div className="taskAreaContent">
        <div className="detailTitle">
          {taskTitle}
        </div>
        {item("預估起點",[(<p>{startDestination}</p>)])}
        {item("預估終點",[(<p>{endDestination}</p>)])}
        {item("預估距離",[(<p>{distance}</p>)])}
    </div>
    )
  }

  const contentShow_Host = () => {
    const place = "女一舍 交誼廳";

    if(start){
      getaHostEventRequest();
      setStart(false);
    }

    titleArea = (
      <h1 className = "detail_title_Area">
        <div className="detail_title">{requestDetail.length === 0 ? title : requestDetail[0].title}</div>
        <Tag color="gold" className="detailTag">辦活動</Tag>
    </h1>
    )
    taskArea = (
      <div className="taskAreaContent">
        <div className="detailTitle">
          {taskTitle}
        </div>
        {item("活動地點",[(<p>{place}</p>)])}
    </div>
    )

  }
  


  const taskTitle = (
    <Divider orientation="left" plain>
    任務資訊
    </Divider>
  )

  let titleArea = (
    <h1 className = "detail_title_Area">
    </h1>
  )

  let taskArea = (
    <div className="taskAreaContent"></div>
  )

  if(serviceId === 'kill_cockroach'){
    contentShow_Kill();
  }
  if(serviceId === 'heavylifting'){
    contentShow_HeavyLifting();
  }
  if(serviceId === 'drive'){
    contentShow_Drive();
  }
  if(serviceId === 'host'){
    contentShow_Host();
  }


    const basicArea = (
      <div>
        <Divider orientation="left" plain>
        基本資訊
        </Divider>
  
        {item("活動區間",actArea)}
        {item("徵求區間",hireArea)}
        {serviceId !== 'host' && item("願付金額",[<p></p>,(<p>{requestDetail.length === 0 ? fee : requestDetail[0].fee}</p>)])}
        {item("詳細資訊",[(<p>{requestDetail.length === 0 ? DetailInfo : requestDetail[0].DetailInfo}</p>)])}
        
      </div>
    )



// 接 API 的 function
async function getaDriveRequest(){
  try {
      // GET api
      let res = await axios.get(`http://127.0.0.1:8000/requests/drive/${requestId}`);
      
      if(res.status === 200) {
          setRequestDetail(
              res.data.map(e => {
                    return{
                      key: e.Request.request_id,
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title
                  }
              })
          )
      }
      return;
  } catch (error) {
      console.log(error);
  }
}

async function getaKillRequest(){
  try {
      // GET api
      let res = await axios.get(`http://127.0.0.1:8000/requests/kill/${requestId}`);
      
      if(res.status === 200) {
          setRequestDetail(
              res.data.map(e => {
                    return{
                      key: e.Request.request_id,
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title
                  }
              })
          )
      }
      return;
  } catch (error) {
      console.log(error);
  }
}

async function getaHeavyLiftingRequest(){
  try {
      // GET api
      let res = await axios.get(`http://127.0.0.1:8000/requests/heavyLifting/${requestId}`);
      
      if(res.status === 200) {
          setRequestDetail(
              res.data.map(e => {
                    return{
                      key: e.Request.request_id,
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      type: e.HeavyliftingServicePost.item,
                      weight: e.HeavyliftingServicePost.item_weight
                  }
              })
          )
      }
      return;
  } catch (error) {
      console.log(error);
  }
}

async function getaHostEventRequest(){
  try {
      // GET api
      let res = await axios.get(`http://127.0.0.1:8000/requests/hostEvent/${requestId}`);
      
      if(res.status === 200) {
          setRequestDetail(
              res.data.map(e => {
                    return{
                      key: e.Request.request_id,
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title
                  }
              })
          )
      }
      return;
  } catch (error) {
      console.log(error);
  }
}

useEffect(() => {
  if(serviceId === 'kill_cockroach'){
    contentShow_Kill();
  }
  if(serviceId === 'heavylifting'){
    contentShow_HeavyLifting();
  }
  if(serviceId === 'drive'){
    contentShow_Drive();
  }
  if(serviceId === 'host'){
    contentShow_Host();
  }
}, [requestDetail]);

  // return 要寫在這邊
  return (
    
    <div>
        {navBar}
        {titleArea}
        {/* 新增編輯按鈕 */}
        {viewSelf === true && (<div className="detail_button">
          <Button type="primary">
          <Link to="/addPost">編輯</Link>
            </Button> 
        </div>)
        }
        {basicArea}
        {taskArea}
        {viewSelf === false && (<div className="detail_button">
          <Button type="primary">
            <a href="/postSuccess">{serviceId !== 'host' ? "我要應徵": "我要參加"}</a>
            {/* <Link to="/rating">我要參加</Link> */}
          </Button>
        </div>)
        }
    </div>
  )
};


export default Post_Detail_Page;