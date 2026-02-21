// vitals-api.js

// Import required modules
const axios = require('axios');

const VITALS_API_BASE_URL = 'https://api.vitals.com';

// Function to get vital signs for a patient
const getVitalSigns = async (patientId) => {
    try {
        const response = await axios.get(`${VITALS_API_BASE_URL}/vitals/${patientId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching vital signs:', error);
        throw error;
    }
};

// Function to submit vital signs for a patient
const submitVitalSigns = async (patientId, vitalSigns) => {
    try {
        const response = await axios.post(`${VITALS_API_BASE_URL}/vitals/${patientId}`, vitalSigns);
        return response.data;
    } catch (error) {
        console.error('Error submitting vital signs:', error);
        throw error;
    }
};

module.exports = {
    getVitalSigns,
    submitVitalSigns
};