import { useState } from "react";
import SectionLabel from "../sectionLabel";
import Button from "../button";
import * as styles from "../../../styles/home/home.module.css";

const {
  contact,
  contactFlex,
  fieldGroup,
  inputWrapper,
  textareaContainer,
  submitContainer,
} = styles;

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
    <section id="contact" className={contact}>
      <SectionLabel>Drop me a Message</SectionLabel>
      <form onSubmit={submitHandler}>
        <div className={contactFlex}>
          <div className={inputWrapper}>
            <FieldGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
                required
              />
            </FieldGroup>
            <FieldGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                required
              />
            </FieldGroup>
          </div>
          <div className={inputWrapper}>
            <FieldGroup className={textareaContainer}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                required
              />
            </FieldGroup>
          </div>
        </div>
        <div className={submitContainer}>
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

const FieldGroup = ({ children, className }) => {
  return <div className={`${fieldGroup} ${className}`}>{children}</div>;
};

export default Contact;
