import React, { useState } from 'react';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = () => {
    // Log form data to the console
    console.log('Form Data:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
