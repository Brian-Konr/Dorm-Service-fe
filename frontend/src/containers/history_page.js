import Navigation from '../containers/navigation';
import Post_Table from '../components/post_table';
import { useState } from 'react';
import Service_Filter from '../components/service_filter';
import Title_Search from '../components/title_search';
 
const History = ({login,name,setCurrent,current}) => {
    const [serviceStatus, setserviceStatus] = useState("all");
    return (
        <div id="root">
          <header> 
              <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
          </header> 
          <h1 className="page_title">歷史紀錄</h1>
          <div className="filter_and_search">
            <div className="filter"><Service_Filter  setserviceStatus = {setserviceStatus}/></div>
            <div className="search"><Title_Search/></div>
          </div>
          <div className="post_table"><Post_Table Page = {"history"}/></div>
        </div>
      ); 
}



export default History;