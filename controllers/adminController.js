const adminServices = require('../admin/services');

module.exports = {
    router: async () => {
        const admin_router = await adminServices.router();
        return admin_router;
    }
};
