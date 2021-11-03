import { useParams, Link } from "react-router-dom";
import { Divider } from 'antd';
import Navigation from '../containers/navigation';
import { Icon } from '@iconify/react';
import {Tag, Button} from 'antd';


// 加一個參數 myPage
const Post_Detail_Page = ({login,name,setCurrent,current,viewSelf}) => {
  
  
  // 以下是需要跟後端接的資料
  let title = "打蟑螂ㄚㄚㄚ";
  const startActTime = "2020.05.18";
  const endActTime = "2020.05.20";
  const startHireTime = "2020.05.18";
  const endHireTime = "2020.05.20";
  let fee = 100;
  let DetailInfo = "拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚拜託趕快來嗚嗚"


  const actArea = [
    (<p>{startActTime}</p>),
    (<Icon icon="ic:baseline-arrow-right" height="10"/>),
    (<p>{endActTime}</p>)
  ]
  const hireArea = [
    (<p>{startHireTime}</p>),
    (<Icon icon="ic:baseline-arrow-right" height="10"/>),
    (<p>{endHireTime}</p>)
  ]

  //以上是需要跟後端接的資料

  let { serviceId } = useParams();
  
  
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
    const type = "五隻德國大蟑螂";
    const place = "女一208 浴室ㄉ角落";
    const fly = true;
    const flyText = fly ? "會" : "不會"; 

    titleArea = (
    <h1 className = "detail_title_Area">
        <div className="detail_title">{title}</div>
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
  if(serviceId === 'heavylifting'){
    const startDestination = "女一舍 5樓";
    const endDestination = "女一舍 1樓";
    const distance = "100 m";
    const elevator = true;
    const elevatorText = elevator ? "有" : "沒有"; 
    const type = "十張桌子"
    const weight = "10kg"
    //以下之後要刪掉
    title = "資管週道具搬運人力徵求";
    fee = 500;
    DetailInfo = " 大家快來幫幫忙~~~"
    //以上之後要刪掉

    titleArea = (
      <h1 className = "detail_title_Area">
        <div className="detail_title">{title}</div>
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
        {item("物件種類",[(<p>{type}</p>)])}
        {item("預估重量",[(<p>{weight}</p>)])}
    </div>
    )
  }
  if(serviceId === 'drive'){
    const startDestination = "女一舍 5樓";
    const endDestination = "女一舍 1樓";
    const distance = "100 m";
    //以下之後要刪掉
    title = "大一女到水源劇場，腳踏車有坐墊佳";
    fee = 100;
    DetailInfo = " 有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳有坐墊佳"
    //以上之後要刪掉

    titleArea = (
      <h1 className = "detail_title_Area">
        <div className="detail_title">{title}</div>
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
  if(serviceId === 'host'){
    const place = "女一舍 交誼廳";
    //以下之後要刪掉
    title = "周末夜狼人殺競賽 12人成團";
    fee = 100;
    DetailInfo = " 好玩又刺激的遊戲，不來可惜！"
    //以上之後要刪掉


    titleArea = (
      <h1 className = "detail_title_Area">
        <div className="detail_title">{title}</div>
        <Tag color="gold" className="detailTag">載人服務</Tag>
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

    const basicArea = (
      <div>
        <Divider orientation="left" plain>
        基本資訊
        </Divider>
  
        {item("活動區間",actArea)}
        {item("徵求區間",hireArea)}
        {serviceId !== 'host' && item("願付金額",[<p>$</p>,(<p>{fee}</p>)])}
        {item("詳細資訊",[(<p>{DetailInfo}</p>)])}
        
      </div>
    )

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