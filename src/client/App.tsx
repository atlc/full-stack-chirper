import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
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


    render() {
        return (
			<Container>

			</Container>
        );
    }
}

export interface IAppProps {}

export interface IAppState {
	text: string;
}

export default App;


