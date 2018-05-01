import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';
import CircleSvg from 'svg/circle.svg';
import SquareSvg from 'svg/square.svg';
import TriangleSvg from 'svg/triangle.svg';
import bookImg from 'img/book2.jpg';

@connect(state => ({
  counter: state.app.get('counter'),
}))
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }



  render() {
    const {
      counter,
    } = this.props;

    return (
      <div className='Home'>
        <h1>Recipe Flix</h1>
        <p>
          Serving recipes fastest so you can serve the best.
        </p>

        <h2>Add A Recipe</h2>

        <h2>Search</h2>
        
        <hr />

        <h1>Popular Recipes</h1>

      </div>
    );
  }
}
