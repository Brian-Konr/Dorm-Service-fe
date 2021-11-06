import { Button,List } from 'antd';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Menu from 'rc-menu/lib/Menu';

const Login_And_SignUp_With_Login = ({name,click, setClick}) => {

    const handleNotif = () => {
        setClick(!click);
    }
    //利用notification button, 開啟list
    return(
    <>
        <Button><Link to="/addPost">+ 新增任務</Link></Button>
        <Button type="text" onClick={handleNotif}><Icon icon="ci:notification" rotate={2} vFlip={true} /></Button>
        <Button type="text"><Link to="/personal">{name}</Link></Button>
    </>
    );
}

export default Login_And_SignUp_With_Login;
