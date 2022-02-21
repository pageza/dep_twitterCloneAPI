const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');


const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
})
app.use('/', usersRouter);
app.use('/posts', postsRouter);

// DONE: break this out into it's own module later
// const sequelize = new Sequelize({
//   database: 'twatter',
//   dialect: 'mysql',
//   host: '172.17.0.2',
//   port: 3306,
//   username: 'root',
//   password: 'supersecret'
// })
//  sequelize.authenticate()
//      .then(()=> console.log('Connection successful'), (err)=> console.log('Unable to connect: ', err))

// const User = sequelize.define('User', {
//   idUsers: DataTypes.INTEGER,
//   fname: DataTypes.STRING,
//   lname: DataTypes.STRING,
//   uname: DataTypes.STRING,
//   email: DataTypes.STRING,
//   password: DataTypes.STRING,
//   createdAt: DataTypes.DATE,
//   updatedAt: DataTypes.DATE,
//   Roles_idRoles: DataTypes.INTEGER
// })

// const recreateDB = false

// sequelize.sync({force: recreateDB})
//     .then(()=> console.log('Worked'), (err)=> console.log('An error occurred creating the table: ',err))
// const getUsers = (req,res) => {
//   if (!recreateDB) {
//     const users = User.find({
//       attributes:{exclude: ['id']}
//     })
//     res.json(users)
//   }
// }

app.listen(3030)
module.exports = app;
