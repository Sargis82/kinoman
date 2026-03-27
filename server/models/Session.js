const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    frames: {
        type: [Object],  // Array of frame objects
        required: true,
    },
    timestamps: {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
});

module.exports = mongoose.model('Session', sessionSchema);