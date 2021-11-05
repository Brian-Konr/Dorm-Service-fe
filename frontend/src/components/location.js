import { Cascader } from 'antd';
import axios from 'axios';
const Location = () => {
    const map = ['教學大樓','學生宿舍','系館或研究大樓','活動中心','學生餐廳','體育設施','圖書館','行政大樓','其他'];
    var options = [];
    var index = 0;
    async function locationDetail(){
        try {
            // GET api
            for(var i = 1; i <= 9; i++){
                let res = await axios.get(`http://127.0.0.1:8000/locations/${i}`, {});
                if(res.status === 200) {
                    var data = {
                        value: `${i}`,
                        label: map[i-1],
                        children: [
                        ],
                    };
                    res.data.map(e => {
                        index += 1;
                        let innerData = {
                            value: `${index}`,
                            label: e.location_name,
                        };
                        data.children.push(innerData);
                    })
                    options.push(data);
                }
            }

            return;
        } catch (error) {
            console.log(error);
        }
    }
    locationDetail();

    return(
        <Cascader options={options} placeholder="Please select" />
    );
}

export default Location;