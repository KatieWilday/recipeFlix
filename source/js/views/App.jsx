import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { routeCodes } from 'constants/routes';
import Menu from 'components/global/Menu';
import Home from 'views/Home';
import Recipes from 'views/Recipes';
import People from 'views/People';
import NotFound from 'views/NotFound';
import RecipeCreate from 'views/recipes/Create';
import UserCreate from 'views/users/Create';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />

        <div className='Page'>
          <Switch>
            <Route exact path={ routeCodes.HOME } component={ Home } />
            <Route path={ routeCodes.PEOPLE } component={ People } />
            <Route path={ routeCodes.RECIPES } component={ Recipes } />
            <Route path={ routeCodes.RECIPES_CREATE } component={ RecipeCreate } />
            <Route path={ routeCodes.USERS_CREATE } component={ UserCreate } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
