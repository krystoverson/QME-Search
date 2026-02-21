const axios = require('axios');

const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your Google API Key

// Function to fetch Google Reviews by Place ID
const fetchGoogleReviews = async (placeId) => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`;
    
    try {
        const response = await axios.get(url);
        return response.data.result.reviews; // Assuming reviews are in the result property
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        throw error; // Rethrow the error for upstream handling
    }
};

module.exports = {
    fetchGoogleReviews,
};
