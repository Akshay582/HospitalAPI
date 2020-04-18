const Patient = require('../models/patient');

module.exports.create = function(req, res) {
    Patient.findOne({phone: req.body.phone}, function(err, patient){
        if(err){console.log('Error in patient controller:', err); return;}
        if(!patient){
            Patient.create(req.body, function(err, patient){
                if(err){console.log('Error in patient controller:', err); return ;}
            })
        }
    })
}