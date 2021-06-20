const passwordOption = () => {

    const options = {
        properties: {
            password: {
              type: 'password'
            }
          }
    };

    return options;
};

module.exports = {
    passwordOption,
}