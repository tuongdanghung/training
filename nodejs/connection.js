const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('store', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    logging: false,
});

const connectionsDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectionsDatabase()