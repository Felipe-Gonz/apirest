const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get("/", (req, res) =>{
    mysqlConnection.query("SELECT * FROM producto", (err, rows, fields) =>{ 
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) =>{
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM producto WHERE id = ?', [id], (err, rows, fields) =>{
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) =>{
    const {id, name, precio, existencias} = req.body;
    console.log(req.body);
    const query = 'CALL productoAddOrEdit(?, ?, ?, ?);';
    mysqlConnection.query(query, [id, name, precio, existencias], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Producto Saved'});
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const {name, precio, existencias} = req.body;
    const {id} = req.params;
    const query = 'CALL productoAddOrEdit(?, ?, ?, ?);';
    mysqlConnection.query(query, [id, name, precio, existencias], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Producto Update'});
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM producto WHERE id = ?', [id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Producto Deleted'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;