export const publicPath = '/';

// routes
export const routeCodes = {
  HOME: publicPath,
  PEOPLE: `${ publicPath }people`,
  RECIPES: '/recipes',
  RECIPES_CREATE: '/createRecipe',
  REVIEWS: '/reviews',
  USERS_CREATE: '/createUser',
  USERS_SHOW: '/users/:id',
  USERS_GET_ALL: `${ publicPath }getAllUsers`,
};
