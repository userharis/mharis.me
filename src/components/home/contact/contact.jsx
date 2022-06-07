import { useState } from "react";
import SectionLabel from "../sectionLabel";
import Button from "../button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }
  };

  return (
    <section id="contact">
      <SectionLabel>Drop me a Message</SectionLabel>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={(e) => setMessage(e.currentTarget.value)}
            value={message}
            required
          />
        </div>
        <div>
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
