const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { 
        type: String,
        required: true,
        unique: true,
    },
    email: { 
        type: String,
        required: true,
        unique: true,
    },
    imageArray: [
        {
            image: { 
                type: String,
                required: true,
                unique: false,
            },
            imagename: { 
                type: String,
                required: true,
                unique: false,
            },
            imagedate: { 
                type: String,
                required: true,
                unique: false,
            },
        }
    ]
});

module.exports = mongoose.model('Image', imageSchema);