import { useParams, Link, useHistory} from "react-router-dom";
import { Divider, message, Collapse, Popover } from 'antd';
import { useState, useEffect } from 'react'
import Navigation from '../containers/navigation';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import {Tag, Button, Modal, Space} from 'antd';
import axios from 'axios';


// 加一個參數 myPage
const Post_Detail_Page = ({login,name,setCurrent,current,viewSelf, userId}) => {
  const [requestDetail, setRequestDetail] = useState([]);
  const [start, setStart] = useState(true);
  const [location, setLocation] = useState([]);
  const [dorm, setDorm] = useState([]);
  const { confirm } = Modal;
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
  
//請勿刪除!以下為應徵者資料
// requestId
const medal_component = [<Icon icon="whh:medal" color="#c9c9c9" height="20" className="medal_item" />,<Icon icon="fa-solid:medal" color="#c9c9c9" height="20" className="medal_item" />,<Icon icon="whh:medalbronze" color="#d3976e" height="20" className="medal_item"/>,<Icon icon="whh:medalsilver" color="#b2c1c0" height="20" className="medal_item"/>,<Icon icon="whh:medalgold" color="#e9a012" height="20" className="medal_item"/>];
const medal_name = ['實習生','新星','達人','專家','大師']
const task_label = ["載人", "物品搬運","打蟑螂", "辦活動"]

const datas = [
  {
    "phone_num": "0913579111",
    "user_id": 1,
    "dorm_id": 12,
    "user_name": "小陳",
    "gender": "F",
    "fb_url": "https://www.facebook.com/hsiaoli.yeh.1",
    "password": "pass2",
    'status': 0
},
  {
    "phone_num": "0913579222",
    "user_id": 2,
    "dorm_id": 12,
    "user_name": "小巫",
    "gender": "M",
    "fb_url": "https://www.facebook.com/hsiaoli.yeh.1",
    "password": "pass2",
    'status': 1
},
  {
    "phone_num": "0913579333",
    "user_id": 3,
    "dorm_id": 12,
    "user_name": "小葉",
    "gender": "F",
    "fb_url": "https://www.facebook.com/hsiaoli.yeh.1",
    "password": "pass2",
    'status': 0
  }
]

//請勿刪除!以上為應徵者資料

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
  console.log(serviceId, requestId);
  
  
  // 共同區域

  const navBar = (
    <header>
    <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current} userId={userId}/></div>
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
    let place = "place";

    if(start){
      // getApplierList(); 
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
          {item("出沒地點",[(<p>{place}</p>)])}
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
      // getApplierList();
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
      // getApplierList();
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
      // getApplierList();
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





const tempAccept = {}
datas.map(
  data => {
    tempAccept[data['user_id']] = data['status'];
  }
)
//改變頁面狀態
const [accept, setAccept] = useState(tempAccept);


const handleDenyEvent = (e) => {
  
  //更新接受狀態。tbd: 回傳結果
  const tempAccept = accept;
  tempAccept[e] = 2;
  setAccept(tempAccept);
  //更新顯示內容
  const changeApplierList = [];
  datas.map(
    (data) => {
      applierFormat(changeApplierList, data);
    }
  )
  setApplierList(changeApplierList);
  //do POST request
}

const handleAcceptEvent = (e) => {
  //更新接受狀態。tbd: 回傳結果
  const tempAccept = accept;
  tempAccept[e] = 1;
  setAccept(tempAccept);
  const changeApplierList = [];
  //更新顯示內容
  datas.map(
    (data) => {
      applierFormat(changeApplierList, data);
    }
  )
  setApplierList(changeApplierList);

}

//一次輸入一整排勳章
const medalPart = (levels) => {
  // console.log(levels)
  let i = -1;
  const returnValue = []
  levels.map(
    level => {
      i++;
      returnValue.push(
        <div>
          <Popover content={task_label[i]+medal_name[levels[i]-1]}>
            {medal_component[levels[i]-1]}
          </Popover>
        </div>
      )
    }
  )
  return(returnValue)
}

const applierFormat = (list, data) => {
  if(accept[data['user_id']] !== 2){
    list.push(
      <div>
      <Divider orientation="left" plain>
      
      </Divider>
      <div className="applier_name_area">
        {item("用戶姓名",[data['user_name']])}
        {/* <div className="reward">
          {[...medalPart(reward[0])]}
        </div> */}
      </div>
      {item("用戶性別",[data['gender'] === 'F' ? '女' : '男'])}
      {accept[data['user_id']] === 1 
      ? <div>{item("用戶電話",[data['phone_num']])}{item("用戶臉書",[data['fb_url']])}</div>
      : <div ><Button  className="refuse_button" onClick={() => handleDenyEvent(data['user_id'])}>拒絕</Button><Button type="primary" className="accept_button" onClick={() => handleAcceptEvent(data['user_id'])}>接受</Button></div>
      }
    </div>
    )
  }
}

const tempApplier = [];
datas.map(
  (data) => {
    applierFormat(tempApplier, data);
  }
)
const [ApplierList, setApplierList] = useState(tempApplier)




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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,16),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,16),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,16),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,16),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      from_id: e.DriveServicePost.from_id,
                      to_id:e.DriveServicePost.to_id,
                      requester_id: e.Request.requester_id
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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,16),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,16),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,16),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,16),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      requester_location_id: e.KillCockroachServicePost.requester_location_id,
                      requester_id: e.Request.requester_id
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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,16),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,16),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,16),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,16),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      type: e.HeavyliftingServicePost.item,
                      weight: e.HeavyliftingServicePost.item_weight,
                      to_id: e.HeavyliftingServicePost.to_id,
                      to_floor: e.HeavyliftingServicePost.to_floor,
                      from_id: e.HeavyliftingServicePost.from_id,
                      from_floor: e.HeavyliftingServicePost.from_floor,
                      requester_id: e.Request.requester_id
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
                      startActTime: e.Request.act_start_time.slice(0,10) + "  " + e.Request.act_start_time.slice(11,16),
                      endActTime: e.Request.act_end_time.slice(0,10) + "  " + e.Request.act_end_time.slice(11,16),
                      startHireTime: e.Request.start_time.slice(0,10) + "  " + e.Request.start_time.slice(11,16),
                      endHireTime: e.Request.end_time.slice(0,10) + "  " + e.Request.end_time.slice(11,16),
                      fee : e.Request.reward,
                      DetailInfo: e.Request.description,
                      title: e.Request.title,
                      location_detail: e.HostEventPost.location_detail,
                      event_location_id: e.HostEventPost.event_location_id,
                      requester_id: e.Request.requester_id
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
        // console.log("apply success!");
        history.push("/postSuccess");
    }
    return;
  } catch (error) {
      // console.log(error.response.status)
      if(error.response.status === 409){
        message.error("You have already applied this request before!");
      }
      else if(applierId === ""){
        message.error("Please login first!");
      }
      else {
        // console.log("applierId", applierId)
        // console.log("requestId", requestId)
        message.error("There are some mistakes with your application!");
      }
    }
}

function showDeleteConfirm() {
  confirm({
    title: '確定要提早結束徵求嗎?',
    icon: <ExclamationCircleOutlined />,
    content: '一旦執行就不可回溯',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      // console.log('OK');
    },
    onCancel() {
      // console.log('Cancel');
    },
  });
}

async function stopaRequest(){
  try {
      // GET api
      let res = await axios.patch(`http://127.0.0.1:8000/requests/stop/${requestId}`);
      if(res.status === 200) {
          // console.log("stop success!");
          history.push("/myPost");
      }
    return;
  } catch (error) {
      // console.log(error)
      // console.log(error.response.status)
    }
}

  function showDeleteConfirm() {
    confirm({
      title: '確定要提早結束徵求嗎?',
      icon: <ExclamationCircleOutlined />,
      content: '一旦執行就不可回溯',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        // console.log('OK');
        stopaRequest();
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }

  // return 要寫在這邊
  return (
    
    <div>
        {navBar}
        <div className="detail_header">
          {titleArea}
          {viewSelf === true && (<div className="detail_button">
          <Space wrap>
              <Button  onClick={showDeleteConfirm} type="primary" danger>
                提早結束徵求
              </Button>
            </Space>
            </div>)
          }
        </div>
        {viewSelf
        ?      
        <div className="collapse_position"  >
          <Collapse accordion defaultActiveKey={['1']}>
            <Panel header="任務資訊" key="1">
              {basicArea}
              {taskArea}
            </Panel>
            <Panel header="應徵者資訊" key="2">
              {/* {
                datas.map(
                  (data) => {
                    applierFormat(data);
                  }
                )
              } */}
              {[...ApplierList]}
            </Panel>
          </Collapse>
        </div>
        : 
        <div>
          {basicArea}
          {taskArea}
        </div>
        } 

        {viewSelf === false && login === true && (<div className="detail_button">
          {requestDetail.length !== 0 && requestDetail[0].requester_id != userId ?
            <Button type="primary" onClick = {() => applyaRequest(userId)} >
            <a>{serviceId !== 'host' ? "我要應徵": "我要參加"}</a>
            </Button>
            :
            <Button type="primary" onClick = {() => applyaRequest(userId)} disabled>
            <a>{serviceId !== 'host' ? "我要應徵": "我要參加"}</a>
            </Button>
          }
          
        </div>)
        }
    </div>
  )
};



export default Post_Detail_Page;