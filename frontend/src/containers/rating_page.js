import React from 'react'
import Navigation from './navigation'
import { Rate, Card,List, Avatar, Space, Button } from 'antd';
import { useState } from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';



const Rating_Page = ({login,name,setCurrent,current}) => {

    //default value
    const navBar = (
        <header>
        <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
        </header>
      )

    //variable
    // const appliersId = ['11','22','33']
    const appliersName = ["陳大大","林中中","黃小小","陳大中","林中小","黃小大","陳大大","林中中","黃小小","陳大大","林中中","黃小小"]
    const appliersGender = ['Male', 'Female', 'Male','Male', 'Female', 'Male','Male', 'Female', 'Male','Male', 'Female', 'Male']
    const appliersNumber = appliersName.length;

    //init everyone's rate to zero
    let tempArr = []
    for(var i = 0;i < appliersNumber;i++){
        tempArr.push({value: 0});
    }
    const [rate, setRate] = useState(tempArr)
    const handleStars = (id, value) => {
      tempArr[id] = value;
      setRate(tempArr);
    }

    const [star, setStar] = useState({values: 3});
    const handleStar = values => {
      setStar({values})
    }
    const {values} = star;
    console.log(values)
    
    //testing
    const listData = [];
    for (let i = 0; i < appliersNumber; i++) {
      listData.push({
        title: appliersName[i],
        avatar: appliersGender === 'Male' ? (<Icon icon="noto-v1:boy-light-skin-tone" color="#c9c9c9" height="20" />): (<Icon icon="noto:girl-light-skin-tone" color="#c9c9c9" height="20" />),
        description:
          (
            <div style={{display: 'inline-box'}}> 
              <Rate id={i} onChange={handleStar} value={values} />
              <p>{values}</p>
            </div>
          )
      });
    }


 


    //用ID去算
    //card definition
    // const card = (applierName, applierId) => {
    //     return(

    //     )
    // }





      return(
          <div>
            {navBar}
            <List
              className="rating_list"
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={listData}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[
                    <Rate></Rate>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
              />
              <Button className="cancel_button"><Link to="/">取消</Link></Button>
              <Button type="primary" className="send_button"><Link to="/">送出</Link></Button>

            </div>
    )

    

    // return (
    //     <div>
    //         {navBar}
    //         {/* <Rate allowHalf defaultValue={0}/> */}
    //         {/* {value ? <span className="ant-rate-text">{value}</span> : ''} */}
    //         <span>
    //             <Rate tooltips={desc} onChange={handleChange} value={value} />
    //             {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    //         </span>

    //     </div>
    // )

}

export default Rating_Page



