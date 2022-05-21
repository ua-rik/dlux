const express = require('express')
const { Sequelize, Op, Model, DataTypes } = require('sequelize')
const exphbs = require('express-handlebars')
const path = require('path')

const dluxRoutes = require('./routes/dlux')

const sequelize = new Sequelize('dlux_db', 'postgres', '123456', {
    // gimme postgres, please!
    dialect: 'postgres'
  });

const PORT = process.env.PORT || 8080

const app = express()

const hbs = exphbs.create({     //настройка конфігу для шаблонізатора
    defaultLayout: 'main',      //назва дефолтного лейаута для сторінок
    extname: 'hbs'              //міняєм розширення для хендлбарс файлів з .handlebars на .hbs
})

app.engine('hbs', hbs.engine)       //двіжок для рендерингу сторінок - назначаєм хендлбарс
app.set('view engine', 'hbs')       //
app.set('views', 'views')           // папка, де будуть в'юcи  сайту


app.use(express.urlencoded({ extended: true}))              //розібратись
app.use(express.static(path.join(__dirname, 'public')))     //розібратись


app.use(dluxRoutes)


async function start() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log('Server - OK')
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

start()
