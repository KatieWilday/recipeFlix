import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userGetAll } from 'actions/user';

@connect(state => ({
  error: state.user.get('error'),
  loading: state.user.get('loading'),
  user: state.user.get('users'),
}))
export default class UserShowAll extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool,
    people: PropTypes.object,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    const {
      dispatch,
      users,
    } = this.props;

    if (!users) {
      dispatch(userGetAll());
    }
  }

  renderUsers() {
    const {
      users,
    } = this.props;

    return users.results.map(user => {
      return (
        <div className='People-person'>
          <h3>{ user.username }</h3>
          <div>Email: { user.email }</div>
        </div>
      );
    });
  }

  render() {
    const {
      loading,
      error,
      users,
    } = this.props;

    return (
      <div className='People'>
        <h1>Users</h1>
        { loading && <div>Loading users...</div> }
        { error && error.toString() }
        <div className='People-list'>
          { users && this.renderUsers() }
        </div>
      </div>
    );
  }
}
