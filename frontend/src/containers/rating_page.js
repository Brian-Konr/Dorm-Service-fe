import React from 'react'
import Navigation from './navigation'
import { Rate, Card } from 'antd';
import { useState } from 'react';


const Rating_Page = ({login,name,setCurrent,current}) => {

    //default value
    const navBar = (
        <header>
        <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
        </header>
      )

    //variable
    const appliersId = ['11','22','33']
    const appliersName = ["陳大大","林中中","黃小小"]
    const appliersNumber = appliersName.length;
    let tempArr = []
    for(var i = 0;i < appliersNumber;i++){
        tempArr.push({value: 0});
    }
    const [rate, setRate] = useState(tempArr)


    //card definition
    // const card = (applierName, applierId) => {
    //     return(

    //     )
    // }


      const [star, setStar] = useState({value: 3});
      const handleStar = value => {
        setStar({value})
      }
      const {value} = star;
      return(
          <div>
            {navBar}
            {/* <Rate onChange={handleStar} value={value} />
            <p>{value}</p> */}
            <div className="site-card-border-less-wrapper">
                <Card title="參加人員" bordered={false} style={{ width: 300 }} className="rating_card">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
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



