import React from 'react';
import Login from '../Login/login.js';

const Authenticate=App=>
    class extends React.Component {
        constructor(props){
            super(props);
            this.state={
                loggedIn: false
            }
        }
        componentDidMount() {
            const savedUserName=localStorage.getItem('username');
            if(savedUserName) {
                this.setState({loggedIn:true});
            } else {
                this.setState({loggedIn:false});
            }
        }
        render() {
            if (this.state.loggedIn) {
                    return <App/>
                } else {
                    return <Login/>
                }
            
        }
}
export default Authenticate;