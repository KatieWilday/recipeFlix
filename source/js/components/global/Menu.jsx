import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import workAndCoLogoImg from 'img/workco-logo.svg';
import recipeFlixLogo from 'img/recipeFlixLogo.png';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-logo'>
          <a href='https://work.co' target='_blank' rel='noreferrer noopener' aria-label='Work & Co website'>
            <img
              src={ recipeFlixLogo }
              alt='RecipeFlix logo'
            />
          </a>
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routeCodes.HOME }
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.RECIPES }
          >
            Recipes
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.RECIPES_CREATE }
          >
            Create Recipe
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.USERS_CREATE }
          >
            Create User
          </NavLink>
        </div>
      </div>
    );
  }
}
