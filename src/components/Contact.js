// src/components/Contact.js
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
