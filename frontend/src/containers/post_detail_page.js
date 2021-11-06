import { useParams, Link, useHistory} from "react-router-dom";
import { Divider, message, Collapse, Popover } from 'antd';
import { useState, useEffect } from 'react'
import Navigation from '../containers/navigation';
import { Icon } from '@iconify/react';
import {Tag, Button} from 'antd';
import axios from 'axios';


// 加一個參數 myPage
const Post_Detail_Page = ({login,name,setCurrent,current,viewSelf, userId}) => {
  const [requestDetail, setRequestDetail] = useState([]);
  const [start, setStart] = useState(true);
  const [location, setLocation] = useState([]);
  const [dorm, setDorm] = useState([]);
  let history = useHistory();
  
  
  // 以下勿刪除！
  let title = "Title";
  const startActTime = "2020.05.18";
  const endActTime = "2020.05.20";
  const startHireTime = "2020.05.18";
  const endHireTime = "2020.05.20";
  let fee = 100;
  let DetailInfo = "拜託趕快來嗚嗚"
  // 以上勿刪除！


  // get location detail
  async function getLocation(){
    try {
        // GET api
        let res = await axios.get("http://127.0.0.1:8000/locations");
        
        if(res.status === 200) {
          setLocation(
                res.data.map(e => {
                      return{
                        location_name: e.location_name,
                        location_id: e.location_id,
                        longitude: e.longitude,
                        _class: e._class,
                        latitude: e.latitude
                    }
                })
            )
        }
        return;
    } catch (error) {
        console.log(error);
    }
  }

  async function getDorm(){
    try {
        // GET api
        let res = await axios.get("http://127.0.0.1:8000/locations/dormitory/");
        
        if(res.status === 200) {
          setDorm(
                res.data.map(e => {
                      return{
                        elevator_exist: e.elevator_exist,
                        location_id: e.location_id,
                        dorm_floor_count: e.dorm_floor_count,
                        facilities: e.facilities
                    }
                })
            )
        }
        return;
    } catch (error) {
        console.log(error);
    }
  }

  
  console.log(dorm);



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
  // console.log(serviceId, requestId);
  
  
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

  
  const { Panel } = Collapse;

  
  const contentShow_Kill = () => {
    // const type = "五隻德國大蟑螂";
    let place = "place";
    // const fly = true;
    // const flyText = fly ? "會" : "不會"; 

    if(start){
      getDorm();
      getLocation();
      getaKillRequest();
      setStart(false);
    }
    

    if(location.length != 0 && requestDetail.length != 0){
      location.map(e => {
        e.location_id == requestDetail[0].requester_location_id ? place = e.location_name : place = place
      })
    }

    

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
          {/* {item("蟑螂類型",[(<p>{type}</p>)])} */}
          {item("出沒地點",[(<p>{place}</p>)])}
          {/* {item("會不會飛",[(<p>{flyText}</p>)])} */}
      </div>
      )
  }

  const contentShow_HeavyLifting = () => {
    let startPoint = "place";
    let endPoint = "place";
    // const distance = "100 m";
    let elevator = true;
    const elevatorText = elevator ? "有" : "沒有"; 
    const type = "十張桌子"
    const weight = "10kg"
   

    if(start){
      getDorm();
      getLocation();
      getaHeavyLiftingRequest();
      setStart(false);
    }

    if(location.length != 0 && requestDetail.length != 0){
      location.map(e => {
        e.location_id == requestDetail[0].to_id ? endPoint = e.location_name + " " +  requestDetail[0].to_floor + " 樓" : endPoint = endPoint
      });
      location.map(e => {
        e.location_id == requestDetail[0].from_id ? startPoint = e.location_name + " " + requestDetail[0].from_floor + " 樓" : startPoint = startPoint
      })
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
        {item("預估起點",[(<p>{startPoint}</p>)])}
        {item("預估終點",[(<p>{endPoint}</p>)])}
        {/* {item("預估距離",[(<p>{distance}</p>)])} */}
        {/* {item("有無電梯",[(<p>{elevatorText}</p>)])} */}
        {item("物件種類",[(<p>{requestDetail.length == 0 ? type : requestDetail[0].type}</p>)])}
        {item("預估重量",[(<p>{requestDetail.length == 0 ? weight : requestDetail[0].weight}</p>)])}
    </div>
    )

  }

  const contentShow_Drive = () => {
    let startPoint = "place";
    let endPoint = "place";
    // const distance = "100 m";

    if(start){
      getDorm();
      getLocation();
      getaDriveRequest();
      setStart(false);
    }

    if(location.length != 0 && requestDetail.length != 0){
      location.map(e => {
        e.location_id == requestDetail[0].to_id ? endPoint = e.location_name : endPoint = endPoint
      });
      location.map(e => {
        e.location_id == requestDetail[0].from_id ? startPoint = e.location_name : startPoint = startPoint
      })
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
        {item("預估起點",[(<p>{startPoint}</p>)])}
        {item("預估終點",[(<p>{endPoint}</p>)])}
        {/* {item("預估距離",[(<p>{distance}</p>)])} */}
    </div>
    )
  }

  const contentShow_Host = () => {
    let  place = "place";
    const  location_detail = "no detail";

    if(start){
      getDorm();
      getLocation();
      getaHostEventRequest();
      setStart(false);
    }

    if(location.length != 0 && requestDetail.length != 0){
      location.map(e => {
        e.location_id == requestDetail[0].event_location_id ? place = e.location_name : place = place
      })
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
        {item("詳細資訊",[(<p>{requestDetail.length === 0 ? location_detail : requestDetail[0].location_detail}</p>)])}
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



//以下是應徵者相關資料
// requestId
const medal_component = [<Icon icon="whh:medal" color="#c9c9c9" height="20" className="medal_item" />,<Icon icon="fa-solid:medal" color="#c9c9c9" height="20" className="medal_item" />,<Icon icon="whh:medalbronze" color="#d3976e" height="20" className="medal_item"/>,<Icon icon="whh:medalsilver" color="#b2c1c0" height="20" className="medal_item"/>,<Icon icon="whh:medalgold" color="#e9a012" height="20" className="medal_item"/>];
// const medal_component = () => {
//   return(

//   )
// }
const medal_name = ['實習生','新星','達人','專家','大師']
const task_label = ["打蟑螂", "物品搬運", "載人", "辦活動"]
const requesterName = ["Jenny", "James"];
const requesterGender = ["Female", "Male"];
const requesterPhone = ["0912345678", "0987654321"];
const requesterFB = ["https://facebook.com/wpbag", "https://facebook.com/wpbag1"];
const reward = [[1,3,2,4],[2,2,3,4]]
const tempAccept = [false, true];
// 這邊要讓他是hook
// const [accept, setAccept] = useState(tempAccept);

//一次輸入一整排
const medalPart = (levels) => {
  console.log(levels)
  let i = -1;
  const returnValue = []
  levels.map(
    level => {
      i++;
      console.log(levels[i]-1)
      console.log(task_label[i])
      returnValue.push(
        <div>
          <Popover content={task_label[i]+medal_name[levels[i]-1]}>
            {medal_component[levels[i]-1]}
          </Popover>
          {/* 這邊加一個hover狀態的東西 */}
          {/* <p>{task_label[i]}{medal_name[levels[i]-1]}</p> */}
        </div>
      )
    }
  )
  return(returnValue)
}
  
  const format = (
    <div>
      <Divider orientation="left" plain>
      應徵者1
      </Divider>
      <div className="applier_name_area">
        {item("用戶姓名",['巫芊瑩'])}
        <div className="reward">
          {[...medalPart(reward[0])]}
        </div>
      </div>
      {item("用戶性別",['Female' === 'Female' ? '女' : '男'])}
      {tempAccept[0] 
      ? <div>{item("用戶電話",['0912345678'])}{item("用戶臉書",['facebook.com'])}</div>
      : <div ><Button className="refuse_button">拒絕</Button><Button type="primary" className="accept_button">接受</Button></div>
      }
    </div>
  )



// const requesterArea = []
// for(var i = 0;i < requesterName.length;i++){
//   requesterArea.push(item("用戶姓名",[(<p>{requesterName[i]}</p>)]));
// }

//以上是應徵者相關資料

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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,19),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,19),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,19),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,19),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      from_id: e.DriveServicePost.from_id,
                      to_id:e.DriveServicePost.to_id
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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,19),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,19),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,19),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,19),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      requester_location_id: e.KillCockroachServicePost.requester_location_id
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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,19),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,19),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,19),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,19),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      type: e.HeavyliftingServicePost.item,
                      weight: e.HeavyliftingServicePost.item_weight,
                      to_id: e.HeavyliftingServicePost.to_id,
                      to_floor: e.HeavyliftingServicePost.to_floor,
                      from_id: e.HeavyliftingServicePost.from_id,
                      from_floor: e.HeavyliftingServicePost.from_floor
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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,19),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,19),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,19),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,19),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      location_detail: e.HostEventPost.location_detail,
                      event_location_id: e.HostEventPost.event_location_id
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
}, [requestDetail, location]);

async function applyaRequest(applierId){
  try {
      // GET api
      let res = await axios.post("http://127.0.0.1:8000/appliers/apply", {
        "applierId": applierId,
        "requestId": requestId
    });
    if(res.status === 201) {
        console.log("apply success!");
        history.push("/postSuccess");
    }
    return;
  } catch (error) {
      console.log(error.response.status)
      if(error.response.status === 409){
        message.error("You have already applied this request before!");
      }
      else if(applierId === ""){
        message.error("Please login first!");
      }
      else {
        console.log("applierId", applierId)
        console.log("requestId", requestId)
        message.error("There are some mistakes with your application!");
      }
    }
}


  // return 要寫在這邊
  return (
    
    <div>
        {navBar}
        <div className="detail_header">
          {titleArea}
          {viewSelf === true && (<div className="detail_button">
            <Button type="primary">
            <Link to="/addPost">編輯</Link>
              </Button> 
          </div>)
          }
        </div>
        {viewSelf
        ?      
        <div className="collapse_position"  defaultActiveKey={['1']}>
          <Collapse accordion >
            <Panel header="任務資訊" key="1">
              {basicArea}
              {taskArea}
            </Panel>
            <Panel header="應徵者資訊" key="2">
              {/* <p>Hello</p> */}
              {format}
              {/* unfinish */}
            </Panel>
          </Collapse>
        </div>
        : 
        <div>
          {basicArea}
          {taskArea}
        </div>
        }
        {/* 應徵者資訊 */}
 

        {viewSelf === false && login === true && (<div className="detail_button">
          <Button type="primary" onClick = { () => applyaRequest(userId)}>
            <a>{serviceId !== 'host' ? "我要應徵": "我要參加"}</a>
            {/* <Link to="/rating">我要參加</Link> */}
          </Button>
        </div>)
        }
    </div>
  )
};

export default Post_Detail_Page;