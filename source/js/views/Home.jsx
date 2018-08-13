import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';
import CircleSvg from 'svg/circle.svg';
import SquareSvg from 'svg/square.svg';
import TriangleSvg from 'svg/triangle.svg';
import bookImg from 'img/book2.jpg';
import { Recipe } from './recipes/Recipe';

// adds counter to this.props!
// AKA MAP STATE TO PROPS
@connect(state => ({
  counter: state.app.get('counter'),
}))
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;

    dispatch(increment());
  }

  render() {
    const {
      counter,
    } = this.props;

    return (
      <div className='Home'>
        <h1>Recipe Genius</h1>
        <p>
          Mother's recipes without mother's stories.
        </p>

        <h2>About</h2>

        <p>
          Don't ever scroll through 5 pages of novel again before having to get to how much garlic you need.
          Learn how to bake your bread without having to hear about how the kids loved it.
          Simple and straight-to-the-point descriptions of what you want to cook it and how to cook it.
        </p>
        {/* <Recipe /> */}
      </div>
    );
  }
}
