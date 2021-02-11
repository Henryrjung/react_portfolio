import React from "react";
import "./Contact.css";

const contactForm = (props) => {
  return (
    <form className="form-container">
      <h1 className="form-logo">Contact Me</h1>
      <formgroup>
        <label className='form-title' for="exampleEmail">Name</label>
        <input
          className="input-field"
          type="name"
          name="name"
          id="nameField"
          placeholder="Please enter your name"
        />
      </formgroup>
      <formgroup>
        <label className='form-title' for="exampleEmail">Email</label>
        <input
          className="input-field"
          type="email"
          name="email"
          id="emailField"
          placeholder="Please enter your email"
        />
      </formgroup>
      <formgroup>
        <label className='form-title' for="exampleText">Message</label>
        <input
          className="text-field"
          type="textarea"
          name="text"
          id="textInput"
        />
      </formgroup>
      <button className="submit-button">Submit</button>
    </form>
  );
};

export default contactForm;
