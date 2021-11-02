import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from 'react'

const Login_Page = () => {

  const [name, setName] = useState();
  const onFinish = (values) => {
     console.log('Received values of form: ', values);
   };

    const onChange = (e) => {
        setName(e.target.value);
        return(name);
    };

  return (
    <>
    <h1 className="login_title">Login</h1>
    <div className="login_page">
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true,}}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={onChange}/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="wide-form-button">
                    <Link to="/welcome">Login</Link>
                </Button>
                Don't have an Account?  <a href="/signUp">Sign Up</a>
            </Form.Item>
        </Form>
    </div>
    </>
  );


}

export default Login_Page;