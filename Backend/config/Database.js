import {Sequelize} from "sequelize";

// ================================= connexion à la base de données ========================================

const db = new Sequelize('crud_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;