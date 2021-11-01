import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main_Page from './containers/main_page';
import Main_With_Login_Page from './containers/main_with_login_page';
import Login_Page from './containers/login_page';
import SignUp_Page from './containers/signUp_page';
import Post_Detail_Page from './containers/post_detail_page';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Main_Page}/>
          <Route path="/welcome" component={Main_With_Login_Page}/>
          <Route path="/login" component={Login_Page}/>
          <Route path="/signUp" component={SignUp_Page}/>
          <Route path="/post_detail/:serviceId" component={Post_Detail_Page}/>
      </div>
    </Router>
  );
}

export default App;
