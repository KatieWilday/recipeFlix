import React, { Component } from 'react';
import cerealImg from 'img/cereal.jpg';

const recipes = [
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






const Recipe = function () {
	return (
		<div>
			{recipes.map(function(recipe, idx){
				return (
					<div className='recipe'>

						<img
							src={ recipe.imageSrc }
							alt='Cereal Image'
						/>

						<h1>{recipe.name}</h1>

						<div>{recipe.description}</div>

						<h4>Ingredients:</h4>
						<ul>
							{recipe.ingredients.map(function(ingredient) {
								return <li>{ingredient}</li>;
							})}
						</ul>

						
						<h4>Directions:</h4>
						<ol>
							{recipe.steps.map(function(step, stepIdx) {
								return <li>{step}</li>;
							})}
						</ol>

					</div>
				)
			})}
		</div>
	)
}

export default Recipe