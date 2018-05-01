const user = function (sequelize, DataTypes) {
	const User = sequelize.define('User', {
		username: DataTypes.STRING
	})

	User.associate = function(models) {
		models.User.hasMany(models.Recipe)
	}

	return User;
}

export default user