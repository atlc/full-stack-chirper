import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Trend from './Trend';

class TrendsPane extends Component {
    state = {
        trends: [
            { label: "r/Birmingham", link: "https://old.reddit.com/r/Birmingham/new/"},
            { label: "Weather", link: "https://weather.com/weather/today/l/d20ef0ab981eddeccb6fd6a2d668969fb6fb6f2ae3a5d2d627a89bd8b566ea41"},
            { label: "News (no comments!)", link: "https://www.al.com/birmingham/"},
            { label: "City Government", link: "https://www.birminghamal.gov/"},
            { label: "ADPH - COVID19", link: "https://www.alabamapublichealth.gov/infectiousdiseases/2019-coronavirus.html"},
            { label: "UAB", link: "https://www.uab.edu/home/"},
            { label: "Covalence Bootcamp", link: "https://covalence.io/"},
            { label: "Innovation Depot", link: "https://innovationdepot.org/"},
            { label: "Bham Museum of Art", link: "https://www.artsbma.org/art/exhibitions/"},
            { label: "Civil Rights Institute", link: "https://www.bcri.org/"},
            { label: "Vulcan", link: "https://visitvulcan.com/" },
            { label: "Railroad Park", link: "http://www.railroadpark.org/"},
            { label: "Bham Barons / Regions Field", link: "https://www.milb.com/birmingham" },
            { label: "Botanical Gardens", link: "https://www.bbgardens.org/"},
            { label: "Birmingham Zoo", link: "https://www.birminghamzoo.com/"},
        ]
    }

    render() {
        return (
            <ul className="nav flex-column children-margin-vert-10 grandchildren-width-100 pad-bot-10 hr-thin br-thin" style={{paddingRight: 15+'px'}}>
                <li className="nav-item"><Button className="badge-pill disabled" variant="info">Birmingham Trends</Button></li>
                {this.state.trends.map((trend, index) => <Trend key={index} label={trend.label} link={trend.link} />)}
            </ul>
        );
    }
}

export default TrendsPane;