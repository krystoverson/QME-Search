// cross-reference-service.js

const similarity = require('similarity'); // Importing similarity scoring package

/**
 * Function to match doctors across multiple platforms
 * using name, NPI, and address matching with similarity scoring.
 * @param {Array} doctors - Array of doctor objects to match
 * @param {String} name - Name of the doctor
 * @param {String} npi - NPI of the doctor
 * @param {String} address - Address of the doctor
 * @returns {Array} - Array of matched doctor objects
 */
function matchDoctors(doctors, name, npi, address) {
    return doctors.filter(doctor => {
        const nameMatch = similarity(name.toLowerCase(), doctor.name.toLowerCase()) > 0.8; // Similarity threshold
        const npiMatch = doctor.npi === npi;
        const addressMatch = similarity(address.toLowerCase(), doctor.address.toLowerCase()) > 0.8;

        return nameMatch || npiMatch || addressMatch;
    });
}

module.exports = {
    matchDoctors,
};
