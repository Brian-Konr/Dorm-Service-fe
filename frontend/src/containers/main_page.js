import Navigation from '../containers/navigation';
import Service_Filter from '../components/service_filter';
import Title_Search from '../components/title_search';
import Post_Table from '../components/post_table';
import { useState } from 'react'
 
const Main_Page = ({login,name,setCurrent,current, setViewSelf}) => {
  setViewSelf(false);
  const [serviceStatus, setserviceStatus] = useState("all");

  // console.log("main page");
    return (
        <div id="root">
          <header>
              <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
          </header> 
          <div className="filter_and_search">
              <div className="filter"><Service_Filter  setserviceStatus = {setserviceStatus}/></div>
              <div className="search"><Title_Search/></div>
          </div>
          <div className="post_table"><Post_Table  isMainPage = {true} serviceStatus = {serviceStatus}/></div>
        </div>
      ); 
}

export default Main_Page;