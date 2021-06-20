const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('admin-bro-mongoose');
const AdminBro = require('admin-bro');

AdminBro.registerAdapter(AdminBroMongoose)

async function run() {
    const db = await require('../config/mongoose');

    const adminBro = new AdminBro({
      databases: [db],
      //... other AdminBroOptions
    });

    const router = AdminBroExpress.buildRouter(adminBro);
    return router;
};

const router = run().then ((res) => {
    return res;
});

module.exports = router;
