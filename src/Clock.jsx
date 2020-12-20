import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             days:0,
             hours:0,
             minutes:0,
             seconds:0
        }
    }

    componentWillMount() {
        this.getTimeUtil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(()=>this.getTimeUtil(this.props.deadline));
    }

    getTimeUtil(deadline){
        const time = Date.parse(deadline)-Date.parse(new Date());
        console.log('time', time);
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));
        console.log('Days',days,' Hours',hours,' Min',minutes,' Sec',seconds)
        this.setState({days, hours,minutes,seconds})
    }
    
    render() {
       

        return (
            <div>
                <div className="clock-days">{this.state.days} days</div>
                <div className="clock-hours">{this.state.hours} hours</div>
                <div className="clock-minutes">{this.state.minutes} Minuites</div>
                <div className="clock-seconds">{this.state.seconds} seconds</div>
            </div>
        )
    }
}

export default Clock;