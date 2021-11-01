import { Table, Tag, Button } from 'antd';
import { useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';

const Post_Table = () => {
    const [index, setIndex] = useState(0); //待改，每輸入一筆資料 setIndex(index+1)
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
        render: click => (
            <>
                {click.map(tag => {
                    let component;
                    
                    if (tag === '打蟑螂') {
                        component = <Button key={index} type="default" shape="circle" href="/post_detail/kill_cockroach" icon={<ArrowRightOutlined />}/>;
                    } if (tag === '物品搬運') {
                        component = <Button key={index} type="default" shape="circle" href="/post_detail/heavylifting" icon={<ArrowRightOutlined />}/>;
                    } if (tag === '載人服務') {
                        component = <Button key={index} type="default" shape="circle" href="/post_detail/drive" icon={<ArrowRightOutlined />}/>;
                    } if (tag === '辦活動') {
                        component = <Button key={index} type="default" shape="circle" href="/post_detail/host" icon={<ArrowRightOutlined />}/>;
                    }
                    return (
                        component
                    );
                })}
            </>
            ),
    },
    ];

    const data = [
    {
        key: '1',
        title: '啊啊啊啊 德國大蟑螂 我好怕啊',
        activity_start_time: '2021 / 05 / 18 21:00',
        activity_end_time: '2021 / 05 / 20 22:00',
        service_item: ['打蟑螂'],
        click: ['打蟑螂'],
    },
    {
        key: '2',
        title: '資管週道具搬運人力徵求',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18',
        service_item: ['物品搬運'],
        click: ['物品搬運'],
    },
    {
        key: '3',
        title: '大一女到水源劇場，腳踏車有坐墊佳',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 21:00',
        service_item: ['載人服務'],
        click: ['載人服務'],
    },
    {
        key: '4',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    {
        key: '5',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    {
        key: '6',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    {
        key: '7',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    {
        key: '8',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    {
        key: '9',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    {
        key: '10',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    {
        key: '11',
        title: '周末夜狼人殺競賽 12人成團',
        activity_start_time: '2021 / 05 / 18',
        activity_end_time: '2021 / 05 / 18 23:00',
        service_item: ['辦活動'],
        click: ['辦活動'],
    },
    ];

    return <Table columns={columns} dataSource={data} />
}

export default Post_Table;