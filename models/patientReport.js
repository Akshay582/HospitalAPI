const mongoose = require('mongoose');

const patientReportSchema = new mongoose.Schema({
    status: {
        type: 'String',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
}, {
    timestamps: true
})

const PatientReport = mongoose.model('PatientReport',patientReportSchema);

module.exports = PatientReport;