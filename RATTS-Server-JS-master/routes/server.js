const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

const accountSid = 'YAC1bfd9d2990942ac58f7f5501728a71b8';
const authToken = 'b609ea1e522ce21585d2d294ad98f4e7';
const client = twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      body: body,
      from: '+15739943511',
      to: to
    })
    .then(message => {
      console.log('SMS sent:', message.sid);
      res.status(200).json({ message: 'SMS sent successfully!' });
    })
    .catch(error => {
      console.error('Error sending SMS:', error);
      res.status(500).json({ error: 'Failed to send SMS' });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});