import { useParams } from "react-router-dom";

const Post_Detail_Page = () => {
  let { serviceId } = useParams();

  if(serviceId === 'kill_cockroach'){
    return (
      <h3>打蟑螂（剩刻表格）</h3>
      )
  }
  if(serviceId === 'heavylifting'){
    return (
      <h3>搬重物（剩刻表格）</h3>
      )
  }
  if(serviceId === 'drive'){
    return (
      <h3>載人（剩刻表格）</h3>
      )
  }
  if(serviceId === 'host'){
    return (
      <h3>辦活動（剩刻表格）</h3>
      )
  }
};
export default Post_Detail_Page;