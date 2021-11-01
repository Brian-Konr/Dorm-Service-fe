import { Select } from 'antd';

const { Option } = Select;

const Service_Filter = () => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return(
    <>
        <Select defaultValue="服務項目" style={{ width: 120 }} onChange={handleChange}>
            <Option value="kill_cockroach">打蟑螂</Option>
            <Option value="heavylifting">物品搬運</Option>
            <Option value="drive">載人服務</Option>
            <Option value="host">辦活動</Option>
        </Select>
    </>
    );
}

export default Service_Filter;