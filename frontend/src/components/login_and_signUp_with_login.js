import { Button } from 'antd';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const Login_And_SignUp_With_Login = ({name}) => {

    return(
    <>
        <Button><Link to="/addPost">+ 新增任務</Link></Button>
        <Button type="text"><Icon icon="ci:notification" rotate={2} vFlip={true} /></Button>
        <Button type="text">{name}</Button>
    </>
    );
}

export default Login_And_SignUp_With_Login;