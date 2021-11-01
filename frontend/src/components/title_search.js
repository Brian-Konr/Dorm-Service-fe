import { Input, Space } from 'antd';

const Title_Search = () => {
    const { Search } = Input;

    const onSearch = value => console.log(value);

    return(
    <Space direction="vertical">
        <Search placeholder="search title" onSearch={onSearch} enterButton />
    </Space>
    );
}

export default Title_Search;