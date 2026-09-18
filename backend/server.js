const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Exotel API variables
const EXOTEL_SID = process.env.EXOTEL_SID;
const EXOTEL_API_KEY = process.env.EXOTEL_API_KEY;
const EXOTEL_API_TOKEN = process.env.EXOTEL_API_TOKEN;
const EXOTEL_EXOPHONE = process.env.EXOTEL_EXOPHONE;
const EXOTEL_APP_ID = process.env.EXOTEL_APP_ID;

// Exotel Base URL (often api.exotel.com, but depends on your region, check Exotel dashboard)
const EXOTEL_SUBDOMAIN = process.env.EXOTEL_SUBDOMAIN || 'api.exotel.com'; 

app.post('/api/call', async (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ error: 'Phone number is required' });
    }

    try {
        // Construct the Exotel API URL
        const apiUrl = `https://${EXOTEL_API_KEY}:${EXOTEL_API_TOKEN}@${EXOTEL_SUBDOMAIN}/v1/Accounts/${EXOTEL_SID}/Calls/connect.json`;
        
        // URL of the Call Flow (App) to trigger when the user picks up
        const appUrl = `http://my.exotel.com/${EXOTEL_SID}/exoml/start_voice/${EXOTEL_APP_ID}`;

        // Prepare the payload (URL encoded format is required by Exotel API)
        const params = new URLSearchParams();
        
        // Format the phone number (Exotel often requires a '0' prefix for Indian numbers)
        let formattedPhone = phoneNumber.replace(/\D/g, ''); // strip non-digits
        if (formattedPhone.length === 10) {
            formattedPhone = '0' + formattedPhone;
        }

        params.append('From', formattedPhone);           // The customer's number we are dialing
        params.append('CallerId', EXOTEL_EXOPHONE);   // Your ExoPhone (the number the customer will see)
        params.append('Url', appUrl);                 // Connects the call to your Voice Bot App

        const response = await axios.post(apiUrl, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        console.error('Error connecting call:', error.response ? error.response.data : error.message);
        res.status(500).json({ 
            success: false, 
            error: error.response ? error.response.data : 'Failed to connect call' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
