import { Table, Tag, Button } from 'antd';
import { useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post_Table = ({isMainPage, serviceStatus}) => {
    // console.log("post table");
    const [index, setIndex] = useState(0); //待改，每輸入一筆資料 setIndex(index+1)
    const [dataList, setDataList] = useState([]);
    const [start, setStart] = useState(true);

    const columns = [
    {
        title: '標題',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '活動開始時間',
        dataIndex: 'activity_start_time',
        key: 'activity_start_time',
    },
    {
        title: '活動結束時間',
        dataIndex: 'activity_end_time',
        key: 'activity_end_time',
    },
    {
        title: '服務項目',
        dataIndex: 'service_item',
        key: 'service_item',
        render: service_item => (
        <>
            {service_item.map(tag => {
                let color;
                if (tag === '打蟑螂') {
                    color = 'volcano';
                } if (tag === '物品搬運') {
                    color = 'green';
                } if (tag === '載人服務') {
                    color = 'geekblue';
                } if (tag === '辦活動') {
                    color = 'gold';
                }
                return (
                    <Tag color={color} key={tag}>{tag}</Tag>
                );
            })}
        </>
        ),
    },
    {
        title: '',
        dataIndex: 'click',
        key: 'click',
        // render: icon => <a>{icon}</a>,
        // render: () => {  
        //     return (
        //         <Button type="default" shape="circle" href="/post_detail/th" icon={<ArrowRightOutlined />}/>
        //     );
        // },
        render: (_, rows) => (
            <>
                {
                    rows.click[0] === '打蟑螂' ?  
                    (<Button  key={index} type="default" shape="circle" >
                            <Link to= {`/post_detail/kill_cockroach/${rows.key}`}>➜</Link>
                    </Button>) 
                    : rows.click[0] === '物品搬運' ?
                    (<Button  key={index} type="default" shape="circle" >
                            <Link to= {`/post_detail/heavylifting/${rows.key}`}>➜</Link>
                    </Button>)
                    : rows.click[0] === '載人服務' ?
                    (<Button  key={index} type="default" shape="circle" >
                            <Link to= {`/post_detail/drive/${rows.key}`}>➜</Link>
                    </Button>)
                    : 
                    (<Button  key={index} type="default" shape="circle" >
                            <Link to= {`/post_detail/host/${rows.key}`}>➜</Link>
                    </Button>)
                }
                
                
            </>
            ),
    },
    ];

    async function getRequestData(){
        try {
            // GET api
            let res;
            if(isMainPage){
                res = await axios.get("http://127.0.0.1:8000/requests/available");
            }
            else{
                res = await axios.get("http://127.0.0.1:8000/requests");
                // 應更正為 -> /requests/ongoing/{requesterId}
                // 等待後端寫完就可以接上
            }

            
            
            
            if(res.status === 200) {
                setDataList(
                    res.data.map(e => {
                        if(e.service_id == 1){
                            return{
                                key: e.request_id,
                                title: e.title,
                                activity_start_time: e.act_start_time.slice(0,10) + "  " + e.act_start_time.slice(11),
                                activity_end_time: e.act_end_time.slice(0,10) + "  " + e.act_end_time.slice(11),
                                service_item: ['載人服務'],
                                click: ['載人服務']
                            }
                        }
                        else if(e.service_id == 2){
                            return{
                                key: e.request_id,
                                title: e.title,
                                activity_start_time: e.act_start_time.slice(0,10) + "  " + e.act_start_time.slice(11),
                                activity_end_time: e.act_end_time.slice(0,10) + "  " + e.act_end_time.slice(11),
                                service_item: ['物品搬運'],
                                click: ['物品搬運']
                            }
                        }
                        else if(e.service_id == 3){
                            return{
                                key: e.request_id,
                                title: e.title,
                                activity_start_time: e.act_start_time.slice(0,10) + "  " + e.act_start_time.slice(11),
                                activity_end_time: e.act_end_time.slice(0,10) + "  " + e.act_end_time.slice(11),
                                service_item: ['打蟑螂'],
                                click: ['打蟑螂']
                            }
                        }
                        else if(e.service_id == 4){
                            return{
                                key: e.request_id,
                                title: e.title,
                                activity_start_time: e.act_start_time.slice(0,10) + "  " + e.act_start_time.slice(11),
                                activity_end_time: e.act_end_time.slice(0,10) + "  " + e.act_end_time.slice(11),
                                service_item: ['辦活動'],
                                click: ['辦活動']
                            }
                        }
                        
                    })
                )
            }
            return;
        } catch (error) {
            console.log(error);
        }
    }

    if(start){
        getRequestData();
        setStart(false);
    }

    

    if(serviceStatus === "all"){
        return <Table columns={columns} dataSource={dataList} />
    }
    else if(serviceStatus === "kill_cockroach"){
        return <Table columns={columns} dataSource={dataList.filter(request => request.service_item[0] === '打蟑螂')} />
    }
    else if(serviceStatus === "heavylifting"){
        return <Table columns={columns} dataSource={dataList.filter(request => request.service_item[0] == '物品搬運')} />
    }
    else if(serviceStatus === "drive"){
        return <Table columns={columns} dataSource={dataList.filter(request => request.service_item[0] == '載人服務')} />
    }
    else if(serviceStatus === "host"){
        return <Table columns={columns} dataSource={dataList.filter(request => request.service_item[0] == '辦活動')} />
    }

    

    return <Table columns={columns} dataSource={dataList} />
}

export default Post_Table;