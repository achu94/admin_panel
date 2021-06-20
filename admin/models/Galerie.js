const mongoose = require('mongoose');

const galerieScheme = new mongoose.Schema({
    image : {
        type: String,
        trim: true
    },
    art : {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    sort: {
        type: Number,
    }
});

module.exports = mongoose.model('Galerie', galerieScheme);