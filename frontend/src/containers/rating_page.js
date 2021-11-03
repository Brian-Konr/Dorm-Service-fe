import React from 'react'
import Navigation from './navigation'
import { Rate } from 'antd';
import { useState } from 'react';


const Rating_Page = ({login,name,setCurrent,current}) => {

    const navBar = (
        <header>
        <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
        </header>
      )
    

      
      const [state, setState] = useState({value: 3});
      const handleStar = value => {
          setState({value})
      }
      const {value} = state;
      return(
          <div>
            {navBar}
            <Rate onChange={handleStar} value={value} />
            <p>{value}</p>
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



