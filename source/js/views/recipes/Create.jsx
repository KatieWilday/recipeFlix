import React, { Component } from 'react';

export default class RecipeCreate extends Component {


  render() {

  	function submitHandle(e) {
  		console.log('submitHandle called, e: ', e)
  	}


    return (
      <div className='Home'>
        <h1>Create Recipe</h1>
        <h1>Test</h1>

        <form action="#" method="post" acceptCharset="utf-8" ajax="true">

        	<input type="text" name="name" placeholder="Milksteak for 2"/> 
        	<textarea name="description"></textarea>
        	<input onSubmit={submitHandle} type="submit" value="Create Recipe"/>
        </form>

      </div>
    );
  }
}

