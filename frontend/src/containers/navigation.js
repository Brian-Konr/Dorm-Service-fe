import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { Link } from "react-router-dom";
import Login_And_SignUp from '../components/login_and_signUp';
import Login_And_SignUp_With_Login from '../components/login_and_signUp_with_login';


const Navigation = ({login,name,setCurrent,current}) => {

    const handleClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    return (
      <div className = "nav">
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" className = "left_nav">
        {/* tbd: replace with clicible logo */}
        <Menu.Item key="title" icon={<HomeOutlined />}>
          <Link to="/">Dormy 你的宿舍好幫手</Link>
        </Menu.Item>
        <Menu.Item key="post">
          <Link to="/">刊登中任務</Link>
        </Menu.Item>
        <Menu.Item key="my_post">
          <Link to="/myPost">檢視發起中任務</Link>
        </Menu.Item>
        <Menu.Item key="history">
          歷史紀錄
        </Menu.Item>
      </Menu>
      <Menu mode="horizontal" className = "right_nav">
        <div className="right_nav">
          {login === false ? <Login_And_SignUp/>  : <Login_And_SignUp_With_Login name={name}/>}
        </div> 
      </Menu>
      </div>


    );
}

export default Navigation;