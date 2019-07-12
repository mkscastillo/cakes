var cakes = require('../controllers/cakes.js');

module.exports = function(app){
    app.get('/cakes', function(req,res){
        cakes.show_all(req,res);
    });
    app.get('/cake/:id', function(req,res){
        cakes.show_one(req,res);
    });
    app.post('/new', function(req,res){
        cakes.create(req,res);
    });
    app.put('/rating/:id', function(req,res){
        console.log(req.body);
        cakes.create_rating(req,res);
    });
}