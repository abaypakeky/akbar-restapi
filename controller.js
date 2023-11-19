'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi Rest API berjalan!",res)
};

// menampilkan seluruh data mahasiswa
exports.tampilsemuamahasiswa = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkannim = function(req, res){
    let nim = req.params.nim;
    connection.query('SELECT * FROM mahasiswa WHERE nim = ?', [nim],
    function(error, row, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(row, res);
        }
    });
};

