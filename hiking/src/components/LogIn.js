import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <form>
                <label for='userName'>User Name:</label>
                <input type='text' name='userName' placeholder="User Name" onChange={this.handleChange}/>
                <label for='password'>Password</label>
                <input type="text" name="password" placeholder="Password Here" onChange={this.handleChange}/>
                <input type="submit" value="Login Now" />
            </form>
        )
    }

}

export default Login;