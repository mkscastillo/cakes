var mongoose = require('mongoose');
var Cake = mongoose.model('Cake');

module.exports = {
    show_all:function(req,res){
        Cake.find({}, function(err,cakes){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                res.json({cakes:cakes});
            }
        })
    },
    show_one:function(req,res){
        console.log(req.params.id);
        Cake.findOne({_id:req.params.id}, function(err, cake){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({cake:cake});
            }
        })
    },
    create:function(req,res){
        var cake = new Cake({baker: req.body.cake.baker, photo: req.body.cake.photo});
        cake.save(function(err){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success"});
            }
        })
    },
    create_rating:function(req,res){
        console.log(req.body.rating.id);
        Cake.updateOne({_id:req.body.rating.id},{$push:{ratings: {rating:req.body.rating.rating.rating,comment:req.body.rating.rating.comment}}}, function(err,task){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully updated"});
            }
        })
    }
}