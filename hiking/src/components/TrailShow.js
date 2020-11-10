import React, {Component} from 'react';

import axios from 'axios';

import TrailDetails from './TrailDetails';

class TrailShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trailNum: 1,
            trailData: null
        }
    }
    getTrailData = () => {
        let resp = null;
        // 192.168.0.19
        async function makeRequest(trail) {
            resp = await axios.get(`http://localhost:3001/trails/${trail}`) 
        }
        makeRequest(this.state.trailNum);
        console.log(resp)
        // this.setState({
        //     trailData: resp
        // })
    }
    componentDidMount() {
        this.getTrailData();
        // console.log(this.state.trailData);
    }
    render() {
        return (
            <div className="trail-details">
               {this.state.trailData != null &&  <TrailDetails trailData={this.state.trailData}/>}
            </div>
        )
    }
}

export default TrailShow;