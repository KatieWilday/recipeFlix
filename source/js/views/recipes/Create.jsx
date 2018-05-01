import React, { Component } from 'react';

export default class RecipeCreate extends Component {
  render() {

    return (
      <div className='Home'>
        <h1>Create Recipe</h1>
        <h1>Test</h1>

        <form action="/users/create" method="post" acceptCharset="utf-8" ajax="true">

        	<input type="text" name="name" placeholder="Alice Cooper"/> 
        	<textarea name="description"></textarea>
        	<input type="submit" value="Create Recipe"/>
        </form>

      </div>
    );
  }
}

