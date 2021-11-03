import { Divider } from 'antd';
import Navigation from '../containers/navigation';
import { Icon } from '@iconify/react';

const Personal_Page = ({login,name,setCurrent,current}) => {
    // 以下是需要跟後端接的資料
    const gender = "女";
    const phoneNumber = "0912345678";
    const fbUrl = "https://facebook.com/thisIsMyName";
    const serviceId = "打蟑螂";

    const item = (title, description) => {
        return(
          <div className = "detailItem">
            <p className =  "detailItemTitle">{title}</p>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;</p>
            {/* 換行 */}
            {[...description]}
          </div>
        )
      }

    return(
        <>
            <header> 
                <div><Navigation login={login} name={name} setCurrent={setCurrent} current={current}/></div>
            </header>
            <div className="personal_Name">{name}</div>
            <Divider orientation="left" plain>勳章牆</Divider>
            <div className="medal_part">
                <div className="medal">
                    <Icon icon="whh:medalgold" color="#e9a012" height="50" />
                    <div>{serviceId}大師</div>
                </div>
                <div className="medal">
                    <Icon icon="whh:medalsilver" color="#b2c1c0" height="50" />
                    <div>{serviceId}專家</div>
                </div>
                <div className="medal">
                    <Icon icon="whh:medalbronze" color="#d3976e" height="50" />
                    <div>{serviceId}達人</div>
                </div>
                <div className="medal">
                    <Icon icon="fa-solid:medal" color="#c9c9c9" height="50" />
                    <div>{serviceId}新星</div>
                </div>
                <div className="medal">
                    <Icon icon="whh:medal" color="#c9c9c9" height="50" />
                    <div>{serviceId}實習生</div>
                </div>
            </div>

            <Divider orientation="left" plain>基本資料</Divider>
            <div>
                {item("用戶姓名",[(<p>{name}</p>)])}
                {item("用戶性別",[(<p>{gender}</p>)])}
                {item("手機號碼",[(<p>{phoneNumber}</p>)])}
                {item("臉書網址",[(<p>{fbUrl}</p>)])}
            </div>
        </>
    );

}

export default Personal_Page;