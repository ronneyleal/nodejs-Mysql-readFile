const db = require('./db')

const reg = db.sequelize.define('registro', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  olt: {
    type: db.Sequelize.TEXT
  },
  slot: {
    type: db.Sequelize.INTEGER
  },
  port: {
    type: db.Sequelize.INTEGER
  },
  ont_id: {
    type: db.Sequelize.INTEGER
  },
  sn: {
    type: db.Sequelize.TEXT
  },
  run_state: {
    type: db.Sequelize.TEXT
  },
  config_state: {
    type: db.Sequelize.TEXT
  },
  match_state: {
    type: db.Sequelize.TEXT
  }
})

reg.sync()

module.exports = reg
