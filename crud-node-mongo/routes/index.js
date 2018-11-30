const express = require('express');
const router = express.Router();
const model = require('../model/task');
/*
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', {
        usuario: "Andres Mamani Perez",
        dato: "Esta es una pagina en CRUD de Node",
        tasks
    });
});
*/
router.get('/', (req, res) => {
    model.find({}, (err, tasks) => {
        if (err) throw er;
        res.render('index', {
            usuario: "Andres Mamani Perez",
            dato: "Esta es una pagina en CRUD de Node",
            tasks
        });
    });
});

router.post('/add', (req, res) => {
    let body = req.body;
    body.status = false;
    console.log(body);    
    model.create(body, (err, task) => {
        if(err) throw err;
        res.redirect('/');
    });
});

router.get('/turn/:id', (req, res) => {
    let id = req.params.id;
    model.findById(id, (err, task) => {
        if (err) throw err;
        task.status = !task.status;
        task.save()
        .then(() => res.redirect('/'));
    });
});

router.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    model.remove({ _id : id }, (err, task) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router