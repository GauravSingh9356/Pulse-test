/*jshint esversion: 6 */
const mongoose=require('mongoose')

const  Motors=mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Date:{
        type: Date,
        default: Date.now,
    },
    Email: {
        type: String,
        required:true,
    },
    PhoneNumber: {
        type: Number,
        required:true,
    },
    Vehicle:
    {
    type: String,
        required:true,
    },
    InsuredName: {
        type: String,
        required:true,
    },
})

module.exports = mongoose.model('motors',Motors)

const  NonMotors=mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Date:{
        type: Date,
        default: Date.now,
    },
    Email: {
        type: String,
        required:true,
    },
    PhoneNumber: {
        type: Number,
        required:true,
    },
    InsuredName: {
        type: String,
        required:true,
    },
    
})

module.exports = mongoose.model('nonMotors', NonMotors)

const  HealthCare=mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Date:{
        type: Date,
        default: Date.now,
    },
    Email: {
        type: String,
        required:true,
    },
    PhoneNumber: {
        type: Number,
        required:true,
    },
    InsuredName: {
        type: String,
        required:true,
    },
    
})

module.exports = mongoose.model('healthCare', HealthCare)

const  JoinUs=mongoose.Schema({
    FirstName: {
        type: String,
        required:true,
    },
    LastName:{
        type: String,
        required:true,
    },
    Email: {
        type: String,
        required:true,
    },
    JobRole:{
        type: String,
        required:true,
    },
    PhoneNumber: {
        type: String,
        required:true,
    },
    
})

module.exports = mongoose.model('joinUs',JoinUs)


const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required:true,
    },
    Date:{
        type: Date,
        default: Date.now,
    },
    Email: {
        type: String,
        required:true,
    },
    PhoneNumber: {
        type: Number,
        required:true,
    },
    InsuredName: {
        type: String,
        required:true,
    }
}, {timestamps: true});

module.exports = mongoose.model('SingleFile', singleFileSchema);