const Sequelize = require('sequelize')

const sequelize = new Sequelize('virtex', 'root', 'root', {
  host: 'db',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true
  },
  logging: false
})

// sequelize
//   .authenticate()
//   .then(function () {
//     console.log('conectado ao db com sucesso')
//   })
//   .catch(function () {
//     console.log('falha ao tentar se conectar ao db: ' + err)
//   })

module.exports = { Sequelize, sequelize }
