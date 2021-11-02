import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
    
    const [current, setCurrent] = useState('title');

    const handleClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    return (
      <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
        {/* tbd: replace with clicible logo */}
        <Menu.Item key="title" icon={<HomeOutlined />}>
          <Link to="/">Dormy 你的宿舍好幫手</Link>
        </Menu.Item>
        <Menu.Item key="post">
          <Link to="/">刊登中任務</Link>
        </Menu.Item>
        <Menu.Item key="my_post">
          檢視發起中任務
        </Menu.Item>
        <Menu.Item key="history">
          歷史紀錄
        </Menu.Item>
      </Menu>
    );
}

export default Navigation;