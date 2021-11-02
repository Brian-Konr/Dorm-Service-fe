import Navigation from '../components/navigation';
import Login_And_SignUp_With_Login from '../components/login_and_signUp_with_login';
import Service_Filter from '../components/service_filter';
import Title_Search from '../components/title_search';
import Post_Table from '../components/post_table';

const Main_With_Login_Page = () => {
    return (
        <div id="root">
          <header>
            <div><Navigation login = {true}/></div>
              {/* <div className="left_nav"><Navigation/></div> */}
              {/* <div className="right_nav"><Login_And_SignUp_With_Login/></div> */}
          </header>
          <div className="filter_and_search">
              <div className="filter"><Service_Filter/></div>
              <div className="search"><Title_Search/></div>
          </div>
          <div className="post_table"><Post_Table/></div>
        </div>
      );
}

export default Main_With_Login_Page;