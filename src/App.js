import React from 'react';
import axios from "axios";
// import './App.css';

class App extends React.Component {
    state = {
        isLoading: true,
        waterDatas: []
    };
    getWaterDatas = async () => {
        const waterDatas = await axios.get("http://hangang.dkserver.wo.tc/")

    }
    componentDidMount() {
        this.getWaterDatas();
    }
    render() {
        const { isLoading } = this.state;
        return (
            <h1>{isLoading ? "Loading..." : "오늘 한강 수온은?"}</h1>
        )
    }
}
export default App;
