'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);


    app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);

    app.route('/tampil/:idmhs')
        .get(jsonku.tampilberdasarkanidmhs);

    app.route('/tambah')
        .post(jsonku.tambahdatamahasiswa);    
}