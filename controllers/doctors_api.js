const PatientReport = require('../models/patientReport');
const Patient = require('../models/patient');

module.exports.create = function(req, res) {
    Patient.findById(req.params.id, function(err, patient){
        if(patient){
            PatientReport.create({
                status: req.body.status,
                doctor: req.body.doctor,
                patient: req.params.id
            }, function(err, comment){
                // handle error
                if(err){console.log('error in creating a report'); return;}
            });
        }
    });
}

module.exports.allReports = function(req, res){
}