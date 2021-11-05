import Navigation from '../containers/navigation';
import Service_Filter from '../components/service_filter';
import Title_Search from '../components/title_search';
import Post_Table from '../components/post_table';
 
const Main_Page = ({login,name,setCurrent,current, setViewSelf}) => {
  setViewSelf(false);
  // console.log("main page");
    return (
        <div id="root">
          <header>
              <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
          </header> 
          <h1 className="page_title">刊登中任務</h1>
          <div className="filter_and_search">
              <div className="filter"><Service_Filter/></div>
              <div className="search"><Title_Search/></div>
          </div>
          <div className="post_table"><Post_Table  Page = {"main"}/></div>
        </div>
      ); 
}

export default Main_Page;