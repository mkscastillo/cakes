var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakes');

var RatingSchema = new mongoose.Schema({
    comment: {type:String, required:true},
    rating: {type: Number, required:true}
},{timestamps: true })

var CakeSchema = new mongoose.Schema({
    baker: {type:String, required:true},
    photo: {type:String, required:true},
    ratings: [RatingSchema]
},{timestamps: true })

mongoose.model('Cake', CakeSchema);