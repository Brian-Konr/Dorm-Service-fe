import { BrowserRouter as Router, Route } from "react-router-dom";
import Main_Page from './containers/main_page';
import My_Posting_Page from './containers/my_posting_page';
import Login_Page from './containers/login_page';
import SignUp_Page from './containers/signUp_page';
import Add_Post_Page from './containers/add_post_page';
import Post_Detail_Page from './containers/post_detail_page';
import { useState } from 'react'

const App = () => {
  const [current, setCurrent] = useState('title');
  const [login, setLogin] = useState(false);
  const [name, setName] = useState('');

  return (
    <Router>
      <div className="App"> 
          <Route path="/" exact component={() => <Main_Page login={login} name={name} setCurrent={setCurrent} current={current}/>}/>
          <Route path="/addPost" exact component={() => <Add_Post_Page login={login} name={name} setCurrent={setCurrent} current={current}/>}/>
          <Route path="/myPost" component={() => <My_Posting_Page login={login} name={name} setCurrent={setCurrent} current={current}/>}/>
          <Route path="/login" component={() => <Login_Page setLogin={setLogin} setName={setName}/>}/>
          <Route path="/signUp" component={SignUp_Page}/>
          <Route path="/post_detail/:serviceId" component={Post_Detail_Page}/>
      </div>
    </Router>
  );
}

export default App;
