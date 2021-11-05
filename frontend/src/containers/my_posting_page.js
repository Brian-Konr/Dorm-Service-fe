import Navigation from '../containers/navigation';
import Post_Table from '../components/post_table';
 
const My_Posting_Page = ({login,name,setCurrent,current, setViewSelf}) => {
  setViewSelf(true);
  // console.log("my posting page");

    return (
        <div id="root">
          <header> 
              <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
          </header> 
          <h1 className="page_title">檢視發起中任務</h1>
          {/* <div className="post_subTitle">以下為您刊登中的任務列表：</div> */}
          <div className="post_table"><Post_Table Page = {"myPost"}/></div>
        </div>
      );  
}

export default My_Posting_Page;