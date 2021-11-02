import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from 'antd';
// import Navigation from '../containers/navigation';


const postSuccess_page = () => {
    // const navBar = (
    //     <header>
    //       <div><Navigation login = {false}/></div>
    //     </header> 
    //   )

    // <Icon icon="akar-icons:check-box" height="50" />
    return (
        <div className="succes_page">
            <Icon icon="akar-icons:check-box" color="green"height="150" />
            <h1>您的意願已送出！</h1>
            <h5>若發布方回覆訊息，將收到通知</h5>
            <Button>
                <a href="/">回到首頁</a>
            </Button>
        </div>
    )
}

export default postSuccess_page
