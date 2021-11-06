import React from 'react'
import { Collapse } from 'antd'
import Navigation from './navigation';
import { Icon } from '@iconify/react';

const ApplySuccess = ({login,name,setCurrent,current,userId}) => {
    
    const { Panel } = Collapse;
    const navBar = (
        <header>
        <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
        </header>
      )

    return (
        <div>
            {navBar}
            <div className = "detail_title_Area">
                 <Icon icon="line-md:confirm-circle" color="#14d61c" height="30" style={{marginTop:"1.5vh"}} />
                <h1 className="detail_title" style={{paddingTop:'3vh'}}>&emsp;您的應徵已成功！請立即聯繫案主</h1>
            </div>
            <div className="collapse_position">
                <Collapse accordion defaultActiveKey={['1']} >
                    <Panel header="案主資訊" key="1">
                    </Panel>
                    <Panel header="任務資訊" key="2">
                    </Panel>
                </Collapse>
            </div>


        </div>
    )
}

export default ApplySuccess
