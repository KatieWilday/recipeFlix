import React, { Component } from 'react';


export default class Recipe extends Component {
  nameClick(e) {
    console.log('clicked name, props: ', this.props)
  }

  render () {

    const { 
      key,
      imageSrc,
      name,
      description,
      ingredients,
      steps
    } = this.props;

    return (
      <div className='recipe'>

        <img
          src={ imageSrc }
          alt='Cereal Image'
        />

        <h1 onClick={this.nameClick}>{name}</h1>

        <div>{description}</div>

        <h4>Ingredients:</h4>
        <ul>
          {ingredients.map(function(ingredient) {
            return <li>{ingredient}</li>;
          })}
        </ul>

        
        <h4>Directions:</h4>
        <ol>
          {steps.map(function(step, stepIdx) {
            return <li>{step}</li>;
          })}
        </ol>

      </div>
    )
  }
}