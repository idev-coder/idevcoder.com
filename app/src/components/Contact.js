import React from 'react';

const Contact = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Contact Me</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        
        <label>Email:</label>
        <input type="email" name="email" required />
        
        <label>Message:</label>
        <textarea name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
