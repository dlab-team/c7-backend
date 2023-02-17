const Pool = require('sequelize');
const pool = new Pool('prj_devs','estoiko','DeadPoetsSociety',{
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

pool.authenticate().then(() => {
    console.log('Connection establecida con éxito.');

    let Users = pool.define('users', {
        name: {
            type: Pool.STRING
        },
        last_name: {
            type: Pool.STRING
        },
        email: {
            type: Pool.STRING
        },
        password:{
            type: Pool.STRING
        }
    },{
        freezeTableName: true // Modelo tableName será el mismo que el modelo
    });
    Users.sync({force: true}).then(() => {
        
        // Crear una entrada en la tabla Posts
        return Users.create({
            name: 'Don Juan',
            last_name: 'Cassanova',
            email: 'correo@email.com',
            password: '123456'
        });
    });

    //Buscamos todos los registros de la tabla users
    Users.findAll({}).then((data) => {
        console.log(data);
     }).catch((err) => {
        console.log(err);
     });
    
}).catch(err => {
    console.error('Incapaz de conectar a la base de datos:', err);
});