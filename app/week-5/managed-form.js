"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [contactType, setContactType] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneChange = (event) => setPhone(event.target.value);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleBirthdateChange = (event) => setBirthdate(event.target.value);
  const handleContactTypeChange = (event) => setContactType(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  // Each input has it's own div
  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label>Full Name: </label>
        <input type="text" onChange={handleFullNameChange} />
      </div>
      <div>
        <label>Phone Number: </label>
        <input type="tel" onChange={handlePhoneChange} />
      </div>
      <div>
        <label>Email Address: </label>
        <input type="email" onChange={handleEmailChange} />
      </div>
      <div>
        <label>Birthdate: </label>
        <input type="date" onChange={handleBirthdateChange} />
      </div>
      {/* <div>
        <h2>Contact Type</h2>
        <div>
          <input type="radio" name="contact_type" id="ct_personal" />
          <label for="">Personal</label>
        </div>
        <div>
          <input type="radio" name="contact_type" id="ct_business" />
          <label>Business</label>
        </div>
      </div> */}

      <div>
        <label>Contact Type</label>
        <select onChange={handleContactTypeChange}>
          <option selected value="">
            Please select a contact type
          </option>
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </select>
      </div>

      <div>
        <label>Message: </label>
        <textarea onChange={handleMessageChange} ></textarea>
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
