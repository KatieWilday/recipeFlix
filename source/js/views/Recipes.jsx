import React, { Component } from 'react';
import Recipe from './recipes/Recipe';
import cerealImg from 'img/cereal.jpg';


export const recipes = [
  {
    key: '0',
    name: `m&m's cereal`,
    imageSrc: cerealImg,
    description: `it's like cereal if all of it was m&m's`,
    ingredients: [
      `milk`,
      `m&m's`,
      `bowl`,
    ],
    steps: [
      `pour a small gentleman's mountain of m&m's in bowl`,
      `add milk`,
      `serve`,
    ],
  },
  {
    key: '1',
    name: `m&m's cereal`,
    imageSrc: cerealImg,
    description: `it's like cereal if all of it was m&m's`,
    ingredients: [
      `milk`,
      `m&m's`,
      `bowl`,
    ],
    steps: [
      `pour a small gentleman's mountain of m&m's in bowl`,
      `add milk`,
      `serve`,
    ],
  },
  {
    key: '2',
    name: `m&m's cereal`,
    imageSrc: cerealImg,
    description: `it's like cereal if all of it was m&m's`,
    ingredients: [
      `milk`,
      `m&m's`,
      `bowl`,
    ],
    steps: [
      `pour a small gentleman's mountain of m&m's in bowl`,
      `add milk`,
      `serve`,
    ],
  },
  {
    key: '3',
    name: `m&m's cereal`,
    imageSrc: cerealImg,
    description: `it's like cereal if all of it was m&m's`,
    ingredients: [
      `milk`,
      `m&m's`,
      `bowl`,
    ],
    steps: [
      `pour a small gentleman's mountain of m&m's in bowl`,
      `add milk`,
      `serve`,
    ],
  },
  {
    key: '4',
    name: `m&m's cereal`,
    imageSrc: cerealImg,
    description: `it's like cereal if all of it was m&m's`,
    ingredients: [
      `milk`,
      `m&m's`,
      `bowl`,
    ],
    steps: [
      `pour a small gentleman's mountain of m&m's in bowl`,
      `add milk`,
      `serve`,
    ],
  },
]


export default class Home extends Component {
  render() {

    return (
      <div className='Home'>
        <h1>Recipe Flix</h1>
        <p>
          Serving recipes fastest so you can serve the bestest.
        </p>

        <h1>Popular Recipes</h1>

        {recipes.map((recipe) => {
          return (
            <Recipe
              key={ recipe.key }
              src={ recipe.imageSrc }
              name={ recipe.name }
              desription={ recipe.description }
              ingredients={ recipe.ingredients }
              steps={ recipe.steps }

            />
          );
        })}


      </div>
    );
  }
}


  