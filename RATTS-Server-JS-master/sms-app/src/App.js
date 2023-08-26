import React, { useState } from 'react';
import './App.css';

function App() {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');

  const handleSendSMS = async () => {
    try {
      const response = await fetch('/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to, body: message })
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <div className="App">
      <h1>Send SMS</h1>
      <div>
        <input
          type="tel"
          placeholder="Recipient's phone number"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={handleSendSMS}>Send SMS</button>
    </div>
  );
}

export default App;
