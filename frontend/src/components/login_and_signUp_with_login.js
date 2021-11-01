import { Button } from 'antd';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Login_Page from '../containers/login_page';

const Login_And_SignUp_With_Login = () => {
    console.log(Login_Page().props)

    return(
    <>
        <Button >+ 新增任務</Button>
        <Button type="text"><Icon icon="ci:notification" rotate={2} vFlip={true} /></Button>
        <Button type="text">陳</Button>
    </>
    );
}

export default Login_And_SignUp_With_Login;