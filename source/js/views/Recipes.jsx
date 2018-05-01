import React, { Component } from 'react';
import Recipe from './recipes/Recipe'

export default class Home extends Component {
  render() {

    return (
      <div className='Home'>
        <h1>Recipe Flix</h1>
        <p>
          Serving recipes fastest so you can serve the best.
        </p>

{/*        <h2>Add A Recipe</h2>

        <h2>Search</h2>
        
        <hr />
*/}
        <h1>Popular Recipes</h1>
        
        <Recipe />

      </div>
    );
  }
}


  