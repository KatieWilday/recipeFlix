import React, { Component } from 'react';


const recipes = [
	{
		name: `m&m's cereal`,
		imageURL: '',
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
		name: `m&m's cereal`,
		imageURL: '',
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
		name: `m&m's cereal`,
		imageURL: '',
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
		name: `m&m's cereal`,
		imageURL: '',
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
		name: `m&m's cereal`,
		imageURL: '',
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
			I'm a recipe!
			{recipes.map(function(recipe, idx){
				return <div>{recipe.name}</div>;
			})}
		</div>
	)
}

export default Recipe