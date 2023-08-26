const twilio = require('twilio');

const accountSid = 'AC2d0b430510d6ca3210adf6f119e99f40';
const authToken = 'f3188b3d3d6cfa0a6fdb6216c8da760d';
const client = require('twilio')(accountSid, authToken);

const sendSMSToUsers = async (number, hospitalInfo, currentLocation) => {
  try {
    const smsPromises = number.map((num) => {
      const message = generateSMSMessage(hospitalInfo, currentLocation);
      return client.messages.create({
        body: message,
        from: '+13612043582', // Your Twilio phone number
        to: num,
      });
    });

    return await Promise.all(smsPromises);
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
};

const generateSMSMessage = (hospitalInfo, currentLocation) => {
  return `
    Emergency Notification:
    Traveling to ${hospitalInfo.display_name}, latitude ${hospitalInfo.lat}, and longitude ${hospitalInfo.lon}.
    Driver's current location is ${currentLocation.lat}, ${currentLocation.lon}.
    Please stay safe and follow guidelines.
    Your App Team
  `;
};

module.exports = sendSMSToUsers;





// const express = require('express');
// const bodyParser = require('body-parser');
// const twilio = require('twilio');

// const app = express();
// app.use(bodyParser.json());

// // Replace with your Twilio credentials
// const accountSid = 'AC2d0b430510d6ca3210adf6f119e99f40';
// const authToken = 'f3188b3d3d6cfa0a6fdb6216c8da760d';
// const twilioClient = twilio(accountSid, authToken);

// app.post('/send-sms', async (req, res) => {
//   const { to, message } = req.body;

//   try {
//     await twilioClient.messages.create({
//       body: message,
//       from: '+13612043582',
//       to: '9861586497',
//     });
//     res.json({ success: true, message: 'SMS sent successfully' });
//   } catch (error) {
//     console.error('Error sending SMS:', error);
//     res.status(500).json({ success: false, message: 'Failed to send SMS' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
