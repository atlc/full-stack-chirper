import React, { Component } from 'react';
import Chirp from './Chirp';
import Swal from 'sweetalert2';


class FetchableChirps extends Component {
    state = {
        users: [],
        quotes: []
    }

    componentDidMount = async () => {
        try {
            const userArr = await fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(json => this.setState({users:[...json.data]}))
            .then(() => fetch('https://reqres.in/api/users?page=2')
                .then(response => response.json())
                .then(json => this.setState({users: [...this.state.users, ...json.data]})));

            const quotesArr = await fetch("https://type.fit/api/quotes")
                .then(response => response.json())
                .then(json => this.setState({quotes: json.splice(0,12)}));

            await Promise.all([userArr, quotesArr])
                .then(() => {
                    let newState = [...this.state.users];
                    newState.forEach((user, i) => {
                        user.id = `${Math.random().toString(36).substr(2, 16)}_${Date.now().toString(36)}`;
                        user.quote = this.state.quotes[i]
                    });
                    this.setState({users: newState});
                });
        } catch(e) {
            Swal.fire({
                icon: 'error',
                title: 'Uh oh!',
                text: `An error occured when attempting the 3 API calls to preload quotes. Please check the console for more info.`
            });
            console.log(e);
        }
    }

    render() {
        return (
            this.state.users.map((chirpData, i) => {
                return (
                    <Chirp
                        key={chirpData.id}
                        avatar={chirpData.avatar}
                        firstName={chirpData.first_name}
                        lastName={chirpData.last_name}
                        username={`${chirpData.first_name.toLowerCase()}.${chirpData.last_name.toLowerCase()}`}
                        text={chirpData.quote ? `"${chirpData.quote.text}" ${String.fromCharCode(160)} — ${String.fromCharCode(160)} ${chirpData.quote.author}` : null}
                    />
                );
            })
        );
    }
};

export default FetchableChirps;