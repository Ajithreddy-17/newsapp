// index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// CORS configuration to allow only requests from http://localhost:5173
app.use(cors({
    origin: 'http://localhost:5173'  // Allow only this frontend origin
}));

// Your News API key (Replace with your key from https://newsapi.org/)
const NEWS_API_KEY = 'e9c0f21570024f33b846a09240392e9a';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(NEWS_API_URL);
        res.json(response.data.articles); // Send the articles as JSON
    } catch (error) {
        // Improved error handling
        console.error('Error fetching news:', error.response ? error.response.data : error.message);
        res.status(500).send('Error fetching news');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});





