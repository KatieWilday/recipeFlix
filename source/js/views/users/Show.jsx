import React, { Component } from 'react';
import axios from 'axios';

export default class UsersShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const { user } = this.state;
    if (user === null) {
      let id = window.location.pathname.split('/')[2]; 
      axios.get(`http://localhost:8008/users/${id}`)
        .then((data) => {
          this.setState({ user: data.data });
          console.log('success! ', data);
        })
        .catch(err => console.error('err!: ', err));
    }
  }

  render() {
    const { user } = this.state;

    if (user === null) {
      return(
        <div>loading user...</div>
      );
    }


    return (
      <div>
        { user.map(u => (
          <div>
            <h1>Name: { u.username }</h1>
            <h2>Id: { u.id }</h2>
            <h2>Email: { u.email }</h2>
          </div>
        ))}
      </div>
    );
  }
}