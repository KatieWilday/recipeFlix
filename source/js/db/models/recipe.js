const recipe = function (sequelize, DataTypes) {
	const Recipe = sequelize.define('Recipe', {
		name: DataTypes.STRING,
		imageSrc: DataTypes.STRING,
		imageUrl: DataTypes.STRING,
		description: DataTypes.STRING,
		ingredients: DataTypes.Array(DataTypes.STRING),
		steps: DataTypes.Array(DataTypes.STRING),
	})

	Recipe.associate = function (models) {
		models.Recipe.belongsTo(models.User, {
			onDelete: `CASCADE`,
			foreignKey: {
				allowNull: false
			}
		})
	}

	return Recipe
}

export default recipe