import Sequelize from 'sequelize';

import 'recipe' from './recipe'
import 'user' from './user'

// not on github
import 'config' from '../config';


const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.user = sequelize['import'](user)
db.recipe = sequelize['import'](recipe)

// make associations btwn models (if any)
Object.keys(db).forEach(function(modelName) {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db