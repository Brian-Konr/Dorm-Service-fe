import Navigation from '../containers/navigation';
import Service_Filter from '../components/service_filter';
import Title_Search from '../components/title_search';
import Post_Table from '../components/post_table';

const Main_Page = ({login,name}) => {
    return (
        <div id="root">
          <header>
              <div><Navigation login={login} name={name}/></div>
          </header> 
          <div className="filter_and_search">
              <div className="filter"><Service_Filter/></div>
              <div className="search"><Title_Search/></div>
          </div>
          <div className="post_table"><Post_Table/></div>
        </div>
      ); 
}

export default Main_Page;