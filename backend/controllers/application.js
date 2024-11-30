const PersonalDetail = require("../models/personalDetail.model");
const Application = require("../models/application.model");
const FamilyInformation = require("../models/familyInformation.model")
const EducationalBackground = require("../models/educationalBackground.model")

const setPersonalDetail =async(req, res)=>{
    const body = req.body;
    const personalDetail = new PersonalDetail(body);

    try {
       const data = await personalDetail.save();

        res.status(201).json(data._id);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }

}

const setFamilyInformation = async(req, res) => {
    const body = req.body;
    const familyInformation = new FamilyInformation(body);

    try {
        const data = await familyInformation.save();
        res.status(201).json(data._id);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const setEducationalBackground = async(req, res) => {
    const body = req.body;
    const educationalBackground = new EducationalBackground(body)

    try {
        const data = await educationalBackground.save();
        res.status(201).json(data._id)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const submitApplication= async (req, res) => {
    const { course, personalDetailId, familyInformationId, educationalBackgroundId, userId } = req.body;
    // console.log(req.body);

    try {
        // Check that all referenced documents exist
        const lastApplication = await Application.findOne().sort({ applicationId: -1 });
        const applicationId = lastApplication ? (lastApplication.applicationId || 0) + 1 : 1;

        const personalDetail = await PersonalDetail.findById(personalDetailId);
        const familyInformation = await FamilyInformation.findById(familyInformationId);
        const educationalBackground = await EducationalBackground.findById(educationalBackgroundId);

        if (!personalDetail || !familyInformation || !educationalBackground ) {
            return res.status(400).json({ error: 'One or more sections are missing' });
        }

        // Create the Application document
        const application = new Application({
            applicationId,
            course,
            userId,
            personalDetails: personalDetailId,
            familyInformation: familyInformationId,
            educationalBackground: educationalBackgroundId
        });

        await application.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error submitting application' });
    }
};

const getAllApplications = async(req, res)=>{

    try {
        const applications = await Application.find().populate('personalDetails educationalBackground familyInformation');
        // console.log(applications);
        
        res.status(201).json({ message: 'Applications fetched successfully', applications });
    } catch (error) {
        res.status(400).json({ error: 'Error fetching applications' });
    }
}

const getApplications = async(req, res)=>{
    const { userId } = req.params;

    try {
        const applications = await Application.find({userId:userId}).populate('personalDetails educationalBackground familyInformation');
        res.status(200).json({ message: 'Applications fetched successfully', applications });
    } catch (error) {
        res.status(400).json({ error: 'Error fetching applications' });
    }
}

const updateStatus = async(req, res)=>{
    const {status, id}=req.body;

    try {
        const application = await Application.findByIdAndUpdate(
            id,                      
            {status},                
            { new: true, runValidators: true } 
          );
        res.status(200).json({ message: 'Application  updated successfully', application });
    } catch (error) {
        res.status(400).json({ error: 'Error updating application status' });
    }
}


module.exports = {setPersonalDetail, setFamilyInformation, setEducationalBackground, submitApplication, getApplications, getAllApplications, updateStatus};