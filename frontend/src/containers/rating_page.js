import React from 'react'
import Navigation from './navigation'
import { Rate, Card,List, Avatar, Space, Button, PageHeader, message } from 'antd';
import { useState } from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Rating_Page = ({login,name,setCurrent,current, userId}) => {


    let appliersName = [],
        appliersGender = [],
        appliersNumber = 0;

    let {requestId} = useParams();
    async function getAppliers() {
      try {
        let res = await axios.get(`http://127.0.0.1:8000/appliers/asked/${requestId}`);
        console.log(res.data);
        // for(let i = 0; i < res.data.length; i++) {
        //   appliersName.push(res.data[i].user_name);
        //   appliersGender.push(res.data[i].gender)
        // }
      } catch (error) {
        console.log(error);
      }
    };

    getAppliers();
    //default value
    const navBar = (
        <header>
        <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current} userId={userId}/></div>
        </header>
      )

    //variable
    // const appliersId = ['11','22','33']

    //init everyone's rate to zero
    const tempArr = []
    for(var i = 0;i < appliersNumber;i++){
        tempArr.push({value: 0});
    }
    const [rate, setRate] = useState(tempArr)


    const handleStar = (id, inputValue) => {
      let newArr = [...rate]; // copying the old datas array
      newArr[id] = {value: inputValue};
      setRate(newArr);
    }

    //星星顯示 and 最後應該POST上去的數值
    let values = [];
    for(let i = 0;i < appliersNumber;i++){
      values.push(rate[i].value);
    }

    const handleStarPost = () => {
      //do POST request
      message.success("成功送出評分!");
      // window.history.back();

    }
    
    //testing
    const listData = [];
    for (let i = 0; i < appliersNumber; i++) {
      listData.push({
        title: appliersName[i],
        avatar: appliersGender[i] === 'Male' ? (<Icon icon="noto-v1:boy-light-skin-tone" color="#c9c9c9" height="20" />): (<Icon icon="noto:girl-light-skin-tone" color="#c9c9c9" height="20" />),
        description:
          (
            <div style={{display: 'inline-box'}}> 
              <Rate onChange={(value) => handleStar(i, value)} value={values[i]} />
            </div>
          )
      });
    }

      return(
          <div className="rating">
            {navBar}
            {/* 這邊再加一個 */}
            <PageHeader
            onBack={() => window.history.back()}
            // title="返回歷史紀錄"
            subTitle="返回歷史紀錄"
            />
            <div className="rating_frame">
              <List
                className="rating_list"
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 5,
                }}
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                  >
                    <List.Item.Meta
                      title={item.title}
                      avatar={item.avatar}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </div>
              {listData.length !== 0 && 
              <div>
                <Button className="cancel_button" onClick={() => window.history.back()}>取消</Button>
                <Button type="primary" className="send_button" onClick={handleStarPost}><Link to="/history">送出</Link></Button>
              </div>
              }
            </div>
    )


}

export default Rating_Page



