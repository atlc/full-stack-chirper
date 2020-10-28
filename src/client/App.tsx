import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from './components/navigation/Navbar'
import Chirp from './components/common/Chirp';
import Moment from 'react-moment';
import moment from 'moment';




class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            text: ""
        }
    }

    // onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     this.setState({ text: e.target.value });
    // }

    render() {
        return (
			<Container>
				<Navbar></Navbar>
                <button onClick={() => <Chirp user="me" chirpId="0z" body="hello" time={<Moment date={moment()}/>}/>}>Chorp</button>
	            {/* <input value={this.state.text} onChange={this.onInputChange} /> */}
			</Container>
        );
    }
}

export interface IAppProps {}

export interface IAppState {
	text: string;
}

export default App;


