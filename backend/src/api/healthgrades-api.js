'use strict';

const axios = require('axios');

// HealthGrades API integration
const baseUrl = 'https://api.healthgrades.com/';
const apiKey = process.env.HEALTHGRADES_API_KEY; // Use environment variable for storing API key

const getHealthGradesData = async (endpoint) => {
    try {
        const response = await axios.get(`${baseUrl}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from HealthGrades API:', error);
        throw error;
    }
};

module.exports = {
    getHealthGradesData,
};