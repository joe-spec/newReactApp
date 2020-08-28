import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(){
        super();
        this.state={
            name: '',
            password: '',
            message: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value})    
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value})    
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.state.name === 'John' || 
        this.state.name === 'Peter' ||
        this.state.name === 'Andrew' ||
        this.state.name === 'Simon' ||
        this.state.name === 'Matthew' ||
        this.state.name === 'Philip' ||
        this.state.name === 'Thomas' ||
        this.state.name === 'James' ||
        this.state.name === 'Bartholomew' ||
        this.state.name === 'Thaddaeus' ||
        this.state.name === 'Judas'){
            if(this.state.password === '1234')
                this.props.onLogin();
                return;
        }
        this.setState({ message: 'Unsuccessful'})
    }

   render () {
    return(
        <div className='login'>
            <form onSubmit={ this.onFormSubmit }>
            <p className='p'>Write the name of any disciple, your password is 1234</p>
            <p className='red'>{ this.state.message }</p>

            <h1 className='light-green'>Disciples of Jesus</h1>
                <div className='inp'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' onChange={this.onNameChange} required/>
                </div>
                <div className='inp'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.onPasswordChange} required/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
   }
}

export default Login;