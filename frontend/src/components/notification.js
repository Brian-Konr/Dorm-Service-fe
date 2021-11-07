import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { withRouter } from 'react-router';

const Notification = ({userId}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    console.log(userId)
    fetch(`http://127.0.0.1:8000/requests/${userId}`)
      .then(res => res.json())
      .then(body => {
        console.log("notification success!");
        console.log("body = ", body);
        console.log("data = ", data);
        // setData([...data, ...body]);
        setData(body)
        setLoading(false);
        console.log("new data = ", data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div
      id="scrollableDiv"
      className="notification"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
        background: 'white',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>There are no more notifications!</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <p>hello</p>
              {item.status === 1 && <p>you got the job!</p>}
              {/* <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div> */}
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Notification;

