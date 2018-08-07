import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { userGetAll } from 'actions/user';
import axios from 'axios';

@connect(state => ({
  error: state.user.get('error'),
  loading: state.user.get('loading'),
  // users: state.user.get('users'),
}))
export default class UserShowAll extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    people: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const { users } = this.state;

    if (users.length === 0) {

      axios.get('http://localhost:8008/users')
        .then((data) => {
          this.setState({ users: data.data });
        })
        .catch(err => console.error('err!!: ', err))
    }
    
    // const { dispatch } = this.props;
    // if (!users) {
    //   dispatch(userGetAll());
    // }
  }

  getData(req) {
    return fetch(req)
      .then(res => res.json())
      .catch(err => console.error('error!!: ', err));
  }

  renderUsers() {
    const { users } = this.state;

    console.log('this.state: ', this.state)
    return 
  }

  showUserClick(e) {
    let id = e.target.getAttribute('user-id');
    // console.log('e.target: ', e.target.)
    // window.tester = e
    window.location.href = `users/${ id }`;
  }

  render() {
    const {
      loading,
      error,
    } = this.props;

    const { users } = this.state;

    return (
      <div className='People'>
        <h1>Users</h1>
        { loading && <div>Loading users...</div> }
        { error && error.toString() }
        <div className='People-list'>
          { users && users.map(user => {
            return (
              <div className='People-person'>
                <h3>
                  <button user-id={ user.id } onClick={ this.showUserClick }>
                    { user.username }
                  </button>
                </h3>
                <div>Email: { user.email }</div>
              </div>
            );
          })
          }
        </div>
      </div>
    );
  }
}
