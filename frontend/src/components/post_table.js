import { Table, Tag, Button } from 'antd';
import { useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post_Table = ({Page}) => {
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
    ];

    //判斷是檢視詳細資料，或是有評分功能
    if(Page === "history"){
        const arrowIcon ={
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
                    <Button type="secondary">
                        <Link to ={'/rating'}>我要評分</Link>
                    </Button>
                </>
                ),
        }
        columns.push(arrowIcon);
    }
    else{
        const arrowIcon ={
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
        }
        columns.push(arrowIcon);
    }

    async function getRequestData(){
        try {
            // GET api
            let res;
            if(Page === "main"){
                res = await axios.get("http://127.0.0.1:8000/requests/available");
            }
            else if(Page === "myPost"){
                res = await axios.get("http://127.0.0.1:8000/requests");
                // 應更正為 -> /requests/ongoing/{requesterId}
                // 等待後端寫完就可以接上
            }
            //新增history模式，代更正get 內容
            else{
                res = await axios.get("http://127.0.0.1:8000/requests");
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

    // const data = [
    // {
    //     key: '1',
    //     title: '啊啊啊啊 德國大蟑螂 我好怕啊',
    //     activity_start_time: '2021 / 05 / 18 21:00',
    //     activity_end_time: '2021 / 05 / 20 22:00',
    //     service_item: ['打蟑螂'],
    //     click: ['打蟑螂'],
    // },
    // {
    //     key: '2',
    //     title: '資管週道具搬運人力徵求',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18',
    //     service_item: ['物品搬運'],
    //     click: ['物品搬運'],
    // },
    // {
    //     key: '3',
    //     title: '大一女到水源劇場，腳踏車有坐墊佳',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 21:00',
    //     service_item: ['載人服務'],
    //     click: ['載人服務'],
    // },
    // {
    //     key: '4',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // {
    //     key: '5',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // {
    //     key: '6',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // {
    //     key: '7',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // {
    //     key: '8',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // {
    //     key: '9',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // {
    //     key: '10',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // {
    //     key: '11',
    //     title: '周末夜狼人殺競賽 12人成團',
    //     activity_start_time: '2021 / 05 / 18',
    //     activity_end_time: '2021 / 05 / 18 23:00',
    //     service_item: ['辦活動'],
    //     click: ['辦活動'],
    // },
    // ];

    return <Table columns={columns} dataSource={dataList} />
}

export default Post_Table;