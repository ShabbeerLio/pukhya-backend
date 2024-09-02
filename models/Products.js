const mongoose = require('mongoose');

const FeaturesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

const HighlightsSchema = new mongoose.Schema({
    subcategory: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
});

const ProductsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    catimageUrl: {
        type: String,
        required: true
    },
    highlights: [HighlightsSchema],
    features: [FeaturesSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Client', ProductsSchema);
