import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from './components/navigation/Navbar'


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


