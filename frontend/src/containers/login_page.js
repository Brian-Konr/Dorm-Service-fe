import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';

const Login_Page = ({setLogin, setName}) => {

    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");

    // const onChange = (e) => {
    //     setUserName(e.target.value);
    // };

    const handleLogin = () => {
        if(userName === "aaa" && password === "bbb") {
            setName(userName);
            setLogin(true);
            // redirect to "/"
            console.log("ok");
        }
        else {
            setLogin(false);
            console.log("not ok");
        }
    }

  return (
    <>
        <h1 className="login_title">Login</h1>
        <div className="login_page">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true,}}
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
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} value = {userName} placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
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
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="wide-form-button">
                        <Link to="/">Login</Link>
                    </Button>
                    Don't have an Account?  <a href="/signUp">Sign Up</a>
                </Form.Item>
            </Form>
        </div>
    </>
  );


}

export default Login_Page;