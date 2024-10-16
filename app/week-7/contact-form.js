"use client";

import { useState } from "react";

export default function DirectoryForm({ directoryArray, newContactFunc, closeFormFunc }) {
  // States for inputs
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  const handleFNameChange = (event) => setFName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Consider adding validation
    let newContact = {
      id: directoryArray.length + 2,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      type: type,
    };

    // Lifting state / page.js sets up the state and then this function is being passed to the child
    newContactFunc(newContact);

    // Resetting form to default state
    setFName("");
    setLName("");
    setEmail("");
    setPhone("");
    setType("");

    closeFormFunc();
  };

  return (
    <div onClick={closeFormFunc} className="absolute h-full w-full flex items-center justify-center bg-gray-950/70">
      <form onClick={ (event) => event.stopPropagation() } onSubmit={handleSubmit} className="bg-green-400 rounded p-5 max-w-md">
        <h2>Contact Form</h2>
        <div className="mb-3">
          <label className="inline-block w-40">First Name: </label>
          <input type="text" onChange={handleFNameChange} value={fname} />
        </div>
        {/* Another way to do it without exterior function */}
        <div className="mb-3">
          <label className="inline-block w-40">Last Name: </label>
          <input
            type="text"
            onChange={(event) => setLName(event.target.value)}
            value={lname}
          />
        </div>
        <div className="mb-3">
          <label className="inline-block w-40">Email: </label>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="inline-block w-40">Phone: </label>
          <input
            type="text"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
        </div>
        <div className="mb-3">
          <label className="inline-block w-40">Contact Type: </label>
          <select
            onChange={(event) => setType(event.target.value)}
            value={type}
          >
            <option value="" selected disabled>
              --- Please choose a type ---
            </option>
            <option value="personal">Persona</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className="mb-3">
          <button>Add New Contact!</button>
        </div>
      </form>
    </div>
  );
}
