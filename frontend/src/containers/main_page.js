import Navigation from '../components/navigation';
import Login_And_SignUp from '../components/login_and_signUp';
import Service_Filter from '../components/service_filter';
import Title_Search from '../components/title_search';
import Post_Table from '../components/post_table';

const Main_Page = () => {
    return (
        <div id="root">
          <header>
              <div><Navigation login = {false}/></div>
              {/* <div className="right_nav"><Login_And_SignUp/></div> */}
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