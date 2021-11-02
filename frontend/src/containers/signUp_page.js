import React from 'react';
import { Form,Input,Select,Button } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp_Page = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
    <h1 className="signUp_title">Sign Up</h1>
    <div className="signUp_page">
        <Form 
        {...formItemLayout}
        form={form}
        // layout="vertical"
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        >
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password  placeholder="Confirmed Password"/>
            </Form.Item>

            <Form.Item
                name="facebook-url"
                label="Facebook-Url"
                tooltip="Please input valid FB-URL, so that other people can find you!"
                rules={[
                {
                    required: true,
                    message: 'Please input your Fb-url!',
                    whitespace: true,
                },
                ]}
            >
                <Input 
                    addonBefore="https://"
                    placeholder="facebook.com/yourname"
                />
            </Form.Item>


            <Form.Item
                name="phone_number"
                label="Phone Number"
                rules={[
                {
                    required: true,
                    message: 'Please input phone number!',
                },
                ]}
            >
                <Input placeholder="0912345678"/>
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                {
                    required: true,
                    message: 'Please select gender!',
                },
                ]}
            >
                <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="dorm"
                label="Dorm"
                rules={[
                {
                    required: true,
                    message: 'Please select dorm!',
                },
                ]}
            >
                <Select placeholder="select your dorm">
                <Option value="male_1">男一舍</Option>
                <Option value="male_2">男二舍</Option>
                <Option value="male_3">男三舍</Option>
                <Option value="male_4">男四舍</Option>
                <Option value="male_5">男五舍</Option>
                <Option value="male_6">男六舍</Option>
                <Option value="male_7">男七舍</Option>
                <Option value="male_8">男八舍</Option>
                <Option value="master_male">研一男舍</Option>
                <Option value="master_female">研一女舍</Option>
                <Option value="master_3">研三舍</Option>
                <Option value="fresh_female">大一女舍</Option>
                <Option value="female_1">女一舍</Option>
                <Option value="female_2">女二舍</Option>
                <Option value="female_3">女三舍</Option>
                <Option value="female_4">女四舍</Option>
                <Option value="female_5">女五舍</Option>
                <Option value="female_6">女六舍</Option>
                <Option value="female_7">女七舍</Option>
                <Option value="female_8">女八舍</Option>
                <Option value="female_9">女九舍</Option>
                </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className = "wide-form-button">
                {/* Register */}
                {/* Todo: 如果成功註冊的話跳message */}
                    <Link to="/login">Sign Up</Link>
                </Button>
                Already have an Account?  <a href="/login">Login</a>
            </Form.Item>
        </Form>
    </div>

    </>
  );
};

export default SignUp_Page;