const adminServices = require('../admin/services');


function router(){
    return adminServices.router().then((res) => {
        return res;
    });
}

module.exports = {
    router: async () => {
        const admin_router = await adminServices.router();
        return admin_router;
    }
};
