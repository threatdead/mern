import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    insurancePolicyNumber: {
        type: String,
        required: true
    },
    relationshipToInsured: {
        type: String,
        required: true
    },
    primaryInsuranceName: {
        type: String,
        required: true
    },
    dateOfService: {
        type: Date,
        required: true
    },
    diagnosisCode: {
        type: String,
        required: true
    },
    procedureCode: {
        type: String,
        required: true
    },
    totalCharge: {
        type: Number,
        required: true
    },
    amountPaid: {
        type: Number,
        required: true
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Claim = mongoose.model('Claim', claimSchema);
export default Claim;
