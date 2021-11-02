import React from 'react';
import { Form,Input,Select,DatePicker,Switch,Button,Divider } from 'antd';
import Navigation from '../containers/navigation';
import { useState } from 'react'

const { RangePicker } = DatePicker;

const Add_Post_Page = ({login,name,setCurrent,current}) => {
    const [key, setKey] = useState();
    const rangeConfig = {
        rules: [
          {
            type: 'array',
            required: true,
            message: 'Please select time!',
          },
        ],
      };

  return (
    <>
      <header> 
          <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
      </header>
      <Divider orientation="left" plain>基本資訊</Divider>
      <Form
        labelCol={{span: 4}}
        wrapperCol={{span: 14}}
        layout="horizontal">
        <Form.Item label="任務類別" 
            rules={[
            {
                required: true,
                message: 'Please select service type!',
            },
        ]}>
          <Select onChange={(value) => {setKey(value)}}  placeholder="select service type">
            <Select.Option value="kill_cockroach">打蟑螂</Select.Option>
            <Select.Option value="heavylifting">物品搬運</Select.Option>
            <Select.Option value="drive">載人服務</Select.Option>
            <Select.Option value="host">辦活動</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="range-picker" label="活動區間" {...rangeConfig}>
            <RangePicker />
        </Form.Item>

        <Form.Item name="range-picker" label="徵求區間" {...rangeConfig}>
            <RangePicker />
        </Form.Item>

        <Form.Item label="願付金額" >
          <Input placeholder="請輸入台幣"/>
        </Form.Item>
        
        <Form.Item
            name="詳細資訊"
            label="詳細資訊"
            rules={[{ required: true, message: 'Please input Intro' }]}
        >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
      
      {
        key==='kill_cockroach'?(
        <>
            <Divider orientation="left" plain>任務資訊</Divider>
            <Form.Item label="蟑螂類型" >
                <Input />
            </Form.Item>
            <Form.Item label="出沒地點" >
                <Input />
            </Form.Item>
            <Form.Item label="會不會飛" valuePropName="checked">
                <Switch />
            </Form.Item>
        </>
        ):key==='heavylifting'?(
        <>
            <Divider orientation="left" plain>任務資訊</Divider>
            <Form.Item label="預估起點">
                <Select placeholder="Please select">
                    <Select.Option value="kill_cockroach">打蟑螂</Select.Option>
                    <Select.Option value="heavylifting">物品搬運</Select.Option>
                    <Select.Option value="drive">載人服務</Select.Option>
                    <Select.Option value="host">辦活動</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="預估終點">
                <Select placeholder="Please select">
                    <Select.Option value="kill_cockroach">打蟑螂</Select.Option>
                    <Select.Option value="heavylifting">物品搬運</Select.Option>
                    <Select.Option value="drive">載人服務</Select.Option>
                    <Select.Option value="host">辦活動</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="有無電梯" valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item label="物件種類" >
                <Input />
            </Form.Item>
            <Form.Item label="預估重量" >
                <Input />
            </Form.Item>
            
        </>
        ):key==='drive'?(
            <>
            <Divider orientation="left" plain>任務資訊</Divider>
            <Form.Item label="預估起點">
                <Select placeholder="Please select">
                    <Select.Option value="kill_cockroach">打蟑螂</Select.Option>
                    <Select.Option value="heavylifting">物品搬運</Select.Option>
                    <Select.Option value="drive">載人服務</Select.Option>
                    <Select.Option value="host">辦活動</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="預估終點">
                <Select placeholder="Please select">
                    <Select.Option value="kill_cockroach">打蟑螂</Select.Option>
                    <Select.Option value="heavylifting">物品搬運</Select.Option>
                    <Select.Option value="drive">載人服務</Select.Option>
                    <Select.Option value="host">辦活動</Select.Option>
                </Select>
            </Form.Item>    
        </>
        ):key==='host'?(
        <>
            <Divider orientation="left" plain>任務資訊</Divider>
            <Form.Item label="預估地點">
                <Select placeholder="Please select">
                    <Select.Option value="kill_cockroach">打蟑螂</Select.Option>
                    <Select.Option value="heavylifting">物品搬運</Select.Option>
                    <Select.Option value="drive">載人服務</Select.Option>
                    <Select.Option value="host">辦活動</Select.Option>
                </Select>
            </Form.Item>  
        </>
        ):null
      }
      </Form>
      <Button className="cancel_button">取消</Button>
      <Button type="primary" className="send_button">送出</Button>
    </>
  );
};

export default Add_Post_Page;