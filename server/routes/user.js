const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
const User = require('../models/user.model');


app.get('/user', function(req, res) {
    let since = req.query.since || 0;
    since = Number(since);
    let limit = req.query.limit || 10;
    limit = Number(limit);
    // User.find({},(err, UserDB)=>{
    //     res.json({UserDB});
    // })
    User.find({})
    .skip(since).limit(limit)
    .exec((err,users)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                message: err
            });
        }
        res.json({
            users: users
        });

    })
});

// =================================================
// Método que permite crer un usuarrio
// =================================================
app.post('/user', function(req, res) {

    let body = req.body;
    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    });

    user.save((err,userDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                message: err
            });
        }
        res.json({
            user: userDB
        });
    })
});

// =================================================
// Método que permite actualizar un usuario por id
// =================================================
app.put('/user/:id', function(req, res) {
    let id = req.params.id;
    // Valida datos que se debe actualizar
    let body = _.pick( req.body, ['name','email','img',   'role', 'state']);

    User.findByIdAndUpdate(id,body, {new: true, runValidators: true,  context: 'query'},(err,userDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                message: err
            });
        }
        res.json({
            ok: true,
            user: userDB
        });

    })

    
});

app.delete('/user', function(req, res) {
    res.json('delete Usuario');
});

module.exports = app;