import { Button } from 'antd';
import { Icon } from '@iconify/react';

const Login_And_SignUp_With_Login = ({name}) => {

    return(
    <>
        <Button >+ 新增任務</Button>
        <Button type="text"><Icon icon="ci:notification" rotate={2} vFlip={true} /></Button>
        <Button type="text">{name}</Button>
    </>
    );
}

export default Login_And_SignUp_With_Login;