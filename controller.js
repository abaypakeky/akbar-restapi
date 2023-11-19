'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest API berjalan!", res)
};

// menampilkan seluruh data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanidmhs = function (req, res) {
    let idmhs = req.params.idmhs;
    connection.query('SELECT * FROM mahasiswa WHERE idmhs = ?', [idmhs],
        function (error, row, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(row, res);
            }
        });
};

// menambahkan data mahasisawa
exports.tambahdatamahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES (?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambahkan data!", res)
            }
        }
    );

};

// mengubah data berdasarkan id
exports.ubahMahasiswa = function (req, res) {
    var idmhs = req.body.idmhs;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE idmhs=?', [nim, nama, jurusan, idmhs],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data!", res)
            }
        }
    );
}

// menghapus data berdasarkan id
exports.hapusMahasiswa = function (req, res) {
    var idmhs = req.body.idmhs;

    connection.query('DELETE FROM mahasiswa WHERE idmhs=?', [idmhs],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data!", res)
            }
        }
    );
}