const {Router} = require('express')     //пыдключаєм Router з бібліотеки експресс   
//const dluxModel = require('../models/dluxModel')  //підключаєм модель даних
const router = Router()                 //

router.get('/', async (req, res) => {         //щоб обробити гет запит головноъ сторінки викликаєм колбек
//    const todos = await Todo.find({}).lean()           //тягнем даны з БД

    res.render('index')                 
})                                      //і він вертає відрендерений файл індекс з папки вьюс






module.exports = router  //експортуєм роутер назовні