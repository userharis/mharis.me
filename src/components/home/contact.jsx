import Button from "../button";
import SectionLabel from "./sectionLabel";
import * as styles from "../../styles/home/contact.module.css";

const { contact, btnContainer } = styles;
const Contact = () => {
  return (
    <section id="contact" className={contact}>
      <SectionLabel>Reach Out to Me</SectionLabel>
      <div>
        <h3>Get Stuff Done!</h3>
        <p>
          whether you need a static informational website, a blog that ranks in
          search results or a full-fledged ecommerce store, I am here to help
          you with your web adventures.
        </p>
        <div className={btnContainer}>
          <Button href="mailto:mail@mharis.me">send an email</Button>
          <Button href="https://wa.me/message/6LIOGRTQGSX5A1">
            chat on whatsapp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
