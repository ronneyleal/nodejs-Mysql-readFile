const express = require('express')
const app = express()
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'inputs/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
const input = multer({ storage })

app.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
  })
)
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

const reg = require('./models/reg')

app.get('/', (req, res) => {
  res.render('index', { NavActiveReg: true })
})

app.get('/dataset', (req, res) => {
  reg
    .findAll()
    .then(valores => {
      if (valores.length > 0) {
        return res.render('dataset', {
          NavActiveData: true,
          table: true,
          data: valores.map(valores => valores.toJSON())
        })
      } else {
        res.render('dataset', { NavActiveData: true, table: false })
      }
    })
    .catch(err => {
      console.log(`Houver um erro ao consultar os dados: ${err.message}`)
    })
})

app.post('/reg', input.single('file'), (req, res) => {
  // let radio = req.body.radioinput
  let filename = req.file.filename.toLowerCase()

  if (filename.includes('huawei')) {
    //***********CODIGO DO HUAWEI***********
    let localname = `./inputs/${filename}`
    let lines = fs.readFileSync(localname).toString().split(/\r?\n/)

    let itemshow = []

    function convertLine(line) {
      let elements = line.split(' ').filter(e => e != '')

      let item = {
        olt: elements[0],
        slot: elements[1].split('/')[0],
        port: elements[1].split('/')[1],
        ont_id: elements[2],
        sn: elements[3],
        run_state: elements[5],
        config_state: elements[6],
        match_state: elements[7]
      }
      if (item.olt == '0/') {
        item.olt = 'Huawei'
      } else {
        item.olt = 'ZTE'
      }

      return item
    }
    for (let i = 8; i < lines.length; i++) {
      try {
        let item = convertLine(lines[i])
        reg.create({
          olt: item.olt,
          slot: item.slot,
          port: item.port,
          ont_id: item.ont_id,
          sn: item.sn,
          run_state: item.run_state,
          config_state: item.config_state,
          match_state: item.match_state
        })

        itemshow.push({
          olt: item.olt,
          slot: item.slot,
          port: item.port,
          ont_id: item.ont_id,
          sn: item.sn,
          run_state: item.run_state,
          config_state: item.config_state,
          match_state: item.match_state
        })
        console.log(item)
      } catch (err) {
        break
      }
    }
    return res.render('reg', {
      datainsert: itemshow.values()
    })
  }
  //*********** FIM CODIGO DO HUAWEI***********

  //***********CODIGO DO ZTE***********

  if (!filename.includes('state') && !filename.includes('huawei')) {
    let localname = `./inputs/${filename}`
    let lines = fs.readFileSync(localname).toString().split(/\r?\n/)

    var itemshow = []

    function convertLine(line) {
      let elements = line.split(' ').filter(e => e != '')

      let item = {
        olt: '',
        slot: elements[0].split([':'])[0][11],
        port: elements[0].split([':'])[0][13],
        ont_id: elements[0].split([':'])[1],
        sn: elements[3].split([':'])[1],
        run_state: elements[4],
        config_state: '',
        match_state: ''
      }
      if (item.olt == '0/') {
        item.olt = 'Huawei'
      } else {
        item.olt = 'ZTE'
      }

      return item
    }
    for (let i = 2; i < lines.length; i++) {
      try {
        let item = convertLine(lines[i])
        reg.create({
          olt: item.olt,
          slot: item.slot,
          port: item.port,
          ont_id: item.ont_id,
          sn: item.sn,
          run_state: item.run_state,
          config_state: item.config_state,
          match_state: item.match_state
        })

        itemshow.push({
          olt: item.olt,
          slot: item.slot,
          port: item.port,
          ont_id: item.ont_id,
          sn: item.sn,
          run_state: item.run_state,
          config_state: item.config_state,
          match_state: item.match_state
        })
        console.log(item)
      } catch (err) {
        break
      }
    }

    return res.render('reg', {
      datainsert: itemshow.values()
    })
  }
  //***********FIM CODIGO DO ZTE***********

  //***********CODIGO DO ZTE STATUS***********
  if (filename.includes('state')) {
    let localname = `./inputs/${filename}`
    let lines = fs.readFileSync(localname).toString().split(/\r?\n/)

    var itemshow = []

    function convertLine(line) {
      let elements = line.split(' ').filter(e => e != '')

      let item = {
        olt: '',
        slot: elements[0].split([':'])[0][2],
        port: elements[0].split([':'])[0][4],
        ont_id: elements[0].split([':'])[1],
        sn: '',
        run_state: elements[1],
        config_state: elements[2],
        match_state: elements[3]
      }
      if (item.olt == '0/') {
        item.olt = 'Huawei'
      } else {
        item.olt = 'ZTE'
      }

      return item
    }
    for (let i = 3; i < lines.length; i++) {
      try {
        let item = convertLine(lines[i])
        reg.create({
          olt: item.olt,
          slot: item.slot,
          port: item.port,
          ont_id: item.ont_id,
          sn: item.sn,
          run_state: item.run_state,
          config_state: item.config_state,
          match_state: item.match_state
        })

        itemshow.push({
          olt: item.olt,
          slot: item.slot,
          port: item.port,
          ont_id: item.ont_id,
          sn: item.sn,
          run_state: item.run_state,
          config_state: item.config_state,
          match_state: item.match_state
        })
        console.log(item)
      } catch (err) {
        break
      }
    }
    return res.render('reg', {
      datainsert: itemshow.values()
    })
  }
  //***********FIM CODIGO DO ZTE STATUS***********
  else {
    res.redirect('/')
  }
})

app.post('/del', (req, res) => {
  reg
    .destroy({
      where: {
        id: req.body.id
      }
    })
    .then(retorno => {
      return res.redirect('/dataset')
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(3000, () => {
  console.log('Server on')
})
