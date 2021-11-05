import { Divider } from 'antd';
import Navigation from '../containers/navigation';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useState, useEffect } from 'react'

const Personal_Page = ({login,name,setCurrent,current, userId}) => {

    const medal_component = [<Icon icon="whh:medal" color="#c9c9c9" height="50" />,<Icon icon="fa-solid:medal" color="#c9c9c9" height="50" />,<Icon icon="whh:medalbronze" color="#d3976e" height="50" />,<Icon icon="whh:medalsilver" color="#b2c1c0" height="50" />,<Icon icon="whh:medalgold" color="#e9a012" height="50" />];
    const medal_name = ['實習生','新星','達人','專家','大師']
    
    const [level, setLevel] = useState([]);
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNum] = useState("");
    const [fbUrl, setFbUrl] = useState("");
    const [start, setStart] = useState(true);
    const [temp, setTemp] = useState();
    
    // 以下是需要跟後端接的資料
    async function personalDetail(){
        try {
            // GET api
            let res = await axios.get(`http://127.0.0.1:8000/users/${userId}`, {});
                if(res.status === 200) { 
                    // console.log(res.data); 
                    setGender(res.data.gender);
                    setPhoneNum(res.data.phoneNum);
                    setFbUrl(res.data.fbUrl);
                    res.data.userPoints.map( e => {
                        let data = e.service_id;
                        setLevel([...level,data]);
                        console.log("hello");
                        console.log(data);
                    })
                }
            return;
        } catch (error) {
            console.log(error);
        }
    }
    if(start){
        personalDetail();
        setStart(false);
    }

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

    return(
        <>
            <header> 
                <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
            </header>
            <div className="personal_Name">{name}</div>
            <Divider orientation="left" plain>勳章牆</Divider>
            <div className="medal_part">
                {
                    // console.log(temp)
                }
                <div className="medal">
                    {medal_component[level[0]-1]}
                    <div>打蟑螂{medal_name[level[0]-1]}</div>
                </div>
                <div className="medal">
                    {medal_component[level[1]-1]}
                    <div>物品搬運{medal_name[level[1]-1]}</div>
                </div>
                <div className="medal">
                    {medal_component[level[2]-1]}
                    <div>載人{medal_name[level[2]-1]}</div>
                </div>
                <div className="medal">
                    {medal_component[level[3]-1]}
                    <div>辦活動{medal_name[level[3]-1]}</div>
                </div>
            </div>

            <Divider orientation="left" plain>基本資料</Divider>
            <div>
                {item("用戶姓名",[(<p>{name}</p>)])}
                {item("用戶性別",[(<p>{gender}</p>)])}
                {item("手機號碼",[(<p>{phoneNumber}</p>)])}
                {item("臉書網址",[(<p>{fbUrl}</p>)])}
            </div>
        </>
    );

}

export default Personal_Page;