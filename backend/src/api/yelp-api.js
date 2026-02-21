const axios = require('axios');

const YELP_API_KEY = 'YOUR_YELP_API_KEY'; // Replace with your Yelp API key

const yelpClient = axios.create({
    baseURL: 'https://api.yelp.com/v3/',
    headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        'Content-Type': 'application/json',
    },
});

const searchRestaurants = async (term, location) => {
    try {
        const response = await yelpClient.get('/businesses/search', {
            params: { term, location },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Yelp:', error);
        throw error;
    }
};

module.exports = { searchRestaurants };