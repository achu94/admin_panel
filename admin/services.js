const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('admin-bro-mongoose');
const bcrypt = require('bcrypt');
const {COOKIE_NAME, SECRET} = require('../config/config');
const uploadFeature = require('@admin-bro/upload')

const mongoose = require('mongoose');

const { DB_URI } = require('../config/config');

AdminBro.registerAdapter(AdminBroMongoose);

module.exports = {
  router: async () => {
    const db = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const Galerie = require('./models/Galerie');
    const User = require('./models/User');
    
    const adminBro = new AdminBro({
      databases: [db],
      resources: [
        {
          resource: User,
          options: {
            properties: {
              password: {
                type: 'password'
              }
            }
          },
        },
      ]
    });

    const adminRouter =  AdminBroExpress.buildAuthenticatedRouter(adminBro, {
      authenticate: async (email, password) => {

        const user = await User.findOne( {eMail: email} );
        
        if(!user) return null;

        const areEqual = await bcrypt.compare(password, user.password);
        if(!areEqual) return null;

        return {'email': email, 'password': password};
      },
      cookieName: COOKIE_NAME,
      cookiePassword: SECRET,
    });

    return adminRouter;
  }
};
