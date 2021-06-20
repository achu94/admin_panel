const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('admin-bro-mongoose');

const mongoose = require('mongoose');

const { DB_URI } = require('../config/config');

AdminBro.registerAdapter(AdminBroMongoose);

module.exports = {
  router: async () => {
    const db = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    require('./models/User');
    
    const adminBro = new AdminBro({
      databases: [db],
    });

    const router = AdminBroExpress.buildRouter(adminBro);
      return router;
  }
};
