import React, { Component, useEffect } from 'react'
import Navigation from './navigation'
import { Rate, Card,List, Avatar, Space, Button, PageHeader, message, Modal } from 'antd';
import { useState } from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Rating_Page = ({login,name,setCurrent,current}) => {

    let {requestId} = useParams();
    const [appliers, setAppliers] = useState([]);
    const [dataDone, setDataDone] = useState(false);
    const [values, setValues] = useState([]);
    const [valueDone, setValueDone] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    //default value
    const navBar = (
        <header>
        <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
        </header>
      )
    // let appliersName = ["Jenny","Andy","wendy","Timmy","Fish","Banana","Apple","Pie","Kiwi","Cake","Mango","Juice"]
    // let appliersGender = ['Male', 'Female', 'Male','Male', 'Female', 'Male','Male', 'Female', 'Male','Male', 'Female', 'Male']
    // let appliersNumber = appliersName.length;

    function handleStar(i, value) {
      let tempAppliers = Array.from(appliers);
      if(tempAppliers[i] !== undefined) {
        tempAppliers[i].score = value;
        setAppliers(tempAppliers);
      }
      console.log(appliers);
    }

    if(!valueDone) setVal();

    async function setVal() {
      try {
        let res = await axios.get(`http://127.0.0.1:8000/appliers/asked/${requestId}`);
        console.log(res.data);
        let temp = []
        for(let i = 0; i < res.data.length; i++) {
          temp.push(3);
        }
        setValues(temp);
        setValueDone(true);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      setValueDone(true);
    }, [values])
    
    if(valueDone && !dataDone && values.length !== 0) getData();
    async function getData() {
      let res = await axios.get(`http://127.0.0.1:8000/appliers/asked/${requestId}`);
      let list = res.data.map((e, index) => {
        return {
          title: e.user_name,
          id: e.user_id,
          avatar: e.gender === "M" ? (<Icon icon="noto-v1:boy-light-skin-tone" color="#c9c9c9" height="20" />) : (<Icon icon="noto:girl-light-skin-tone" color="#c9c9c9" height="20" />),
          description: <div>
            <Rate onChange = {(value) => handleRate(index, value)}></Rate>
            {/* <Button onClick={() => showInfo()}>查看</Button> */}
          </div>
        }
      })
      setAppliers(list);
      setDataDone(true);
    }

    function showInfo() {
      setIsModalVisible(true);
      console.log(values);
    }
    function handleRate(index, value) {
      let temp = Array.from(values);
      temp[index] = value;
      setValues(temp);
    }
    function handleOk() {
      setIsModalVisible(false);
    }
    function handleClose() {
      setIsModalVisible(false);
    }

    async function handleStarPost() {
      console.log(appliers, values);
      //do POST request
      try {
        for(let i = 0; i < values.length; i++) {
          let res = await axios.patch("http://127.0.0.1:8000/users/rateRequest", {
            requestId: requestId,
            applierId: appliers[i].id,
            score: values[i]
          });
        }
        message.success("成功送出評分!");
        window.history.back();
      } catch(e) {
        console.log(e);
      }
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
            <Modal visible={isModalVisible} onOk={() => handleOk()} onCancel = {() => handleClose()}>
              {values}
            </Modal>
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
                dataSource={appliers}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                  >
                    <List.Item.Meta
                      title={item.title}
                      avatar={item.avatar}
                      description= {item.description}
                    />
                  </List.Item>
                )}
              />
            </div>
            <Button className="cancel_button" onClick={() => window.history.back()}>取消</Button>
            <Button type="primary" className="send_button" onClick={() => handleStarPost()}>送出</Button>


          </div>
    )


}

export default Rating_Page



