import Navigation from '../containers/navigation';
import Post_Table from '../components/post_table';
 
const History = ({login,name,setCurrent,current}) => {

    return (
        <div id="root">
          <header> 
              <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
          </header> 
          <h1 className="page_title">歷史紀錄</h1>
          <div className="post_table"><Post_Table Page = {"history"}/></div>
        </div>
      ); 
}

export default History;