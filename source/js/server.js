import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import transit from 'transit-immutable-js';

import configureStore from 'config/store';
import getServerHtml from 'components/server/ServerHTML';
import App from 'views/App';
import models from './db/models'

import { getPeopleServer } from 'sagas/people';
import { userGetAllServer } from 'sagas/users';
import 'cors' from 'cors';

// Load SCSS
import 'index.css';

const app = express();
app.options('*', cors())
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Credentials", "true");
  req.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
  req.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
  next();
});

const hostname = 'localhost';
const port = 8080;



// ENV
const IS_DEVELOPMENT = app.get('env') === 'development';

// Disabling "Powered by" headers
app.disable('x-powered-by');

// Telling server to serve our client app build as static assets
app.use('/client', express.static('build/client'));

function sendResponse(req, res, store) {
  // Dehydrates the state
  // Serialize then another stringify to escape it
  const dehydratedState = JSON.stringify(transit.toJSON(store.getState()));

  // Context is passed to the StaticRouter and it will attach data to it directly
  const context = {};

  // Before sending the request app is rendered to a string
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={ store }>
      <StaticRouter location={ req.url } context={ context }>
        <App />
      </StaticRouter>
    </Provider>
  );

  // Adds rest of the HTML page
  const serverHtml = getServerHtml(appHtml, dehydratedState);

  // Context has url, which means `<Redirect>` was rendered somewhere
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // We're good, send the response
    res.status(context.status || 200).send(serverHtml);
  }
}


// This method will wait for all sagas to be finished
// and async data stored to a reducer before sending the response.
// If there are no sagas or sagas fail, it will return response without async data.
function handleRequest(req, res, sagas = null, sagaArgs = {}) {
  // Creates empty store for each request
  const config = configureStore(sagas, sagaArgs);
  console.log('config: ', config)


  if (config.tasks) {
    const tasksEndPromises = config.tasks.map(task => task.done);

    // Wait for all saga tasks to finish
    Promise.all(tasksEndPromises).then(() => {
      config.tasks.forEach(task => {
        config.store.dispatch(task.result());
      });

      sendResponse(req, res, config.store);
    }).catch(error => {
      console.log(error); // eslint-disable-line no-console
      sendResponse(req, res, config.store);
    });
  } else {
    sendResponse(req, res, config.store);
  }
}

// Specific routes which need to fetch async data on the server
// pass two additional params to "handleRequest"
// array of sagas which should be completed
// and object containing saga's options (usually req.params)
// app.get('/people', (req, res) => {
//   handleRequest(req, res, [getPeopleServer]);
// });

// app.get('/getAllUsers', (req, res) => {
//   handleRequest(req, res, [userGetAllServer]);
// })


/* 
 * USER ROUTES
 */

// user create
// app.post('/users/create', (req, res) => {
//   console.log('hello!!!!!')
//   console.log('req: ', req)
//   console.log('res: ', res)
//   console.log('models: ', models)

//   models.User.create({
//     username: req.body.username
//   }).then(() => {
//     console.log('created user!')
//     res.redirect('/users')
//   })
// })

// // user destroy
// app.get('/:user_id/destroy', (req, res) => {
//   models.User.destroy({
//     where: {
//       id: req.params.user_id
//     }
//   }).then(() => {
//     console.log('destroyed user with user_id: ', req.params.user_id)
//     res.redirect('/recipes')
//   })
// })

// app.get('/users', (req, res) => {
//   models.User.findAll().then((users) => {
//     console.log('users; ', users)
//     res.json(users)
//   })
// })




/* 
 * RECIPE ROUTES
 */

// recipe create
app.post('/:user_id/recipe/create', (req, res) => {
  models.Recipe.create({
    name: req.body.name,
    imageSrc: req.body.imageSrc,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
  }).then(() => {
    console.log('created recipe!')
    res.redirect('/recipes')
  })
})


// recipe destroy
app.get('/:user_id/recipes/:recipe_id/destroy', (req, res) => {
  models.Recipe.destroy({
    where: {
      id: req.params.recipe_id
    }
  }).then(() => {
    console.log('destroyed recipe with recipe_id: ', req.params.recipe_id)
    res.redirect('/recipes')
  })
})



// All other routes
app.use((req, res) => {
  handleRequest(req, res);
});

// Error handling
app.use((error, req, res) => {
  res.status(error.status || 500);

  res.render('error', {
    message: error.message,
    // Display stack trace only in development mode
    error: IS_DEVELOPMENT ? error : null,
  });
});



// Start listening
app.listen(port, (error) => {
  if (error) {
    console.error(error); // eslint-disable-line no-console
  } else {
    console.info(`\n★★ Listening on port ${ port }. Open up http://${ hostname }:${ port }/ in your browser.\n`); // eslint-disable-line
  }
});
