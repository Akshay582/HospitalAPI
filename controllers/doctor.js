const Doctor = require('../models/doctor');

module.exports.create = function(req, res) {
    Doctor.findOne({username: req.body.username}, function(err, doctor){
        if(err){console.log('Error in doctor controller:', err); return;}
        if(!doctor){
            Doctor.create(req.body, function(err, doctor){
                if(err){console.log('Error in doctor controller:', err); return ;}
            })
        }
    })
}