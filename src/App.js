import React from 'react';
import axios from "axios";
import WaterInfo from './WaterInfo';
// import './App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        waterDatas: []
    };
    getWaterDatas = async () => {
        const waterDatas = await axios.get("http://openapi.seoul.go.kr:8088/566261794c7461653638534c656f6d/json/WPOSInformationTime/2/7/");
        this.setState({ waterDatas, isLoading: false });
    }
    componentDidMount() {
        this.getWaterDatas()
    }
    render() {
        const { isLoading, waterDatas } = this.state;
        return (
            <div>
                {isLoading
                    ? "Loading..."
                    : waterDatas.map(WaterInfo => (
                        <WaterInfo
                            site={WaterInfo.SITE_ID}
                            date={WaterInfo.MSR_DATE}
                            time={WaterInfo.MSR_TIME}
                            temp={WaterInfo.W_TEMP}
                        />
                    ))}
            </div>
        );
    }
}
export default App;
