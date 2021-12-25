import styled from "styled-components";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import ContactItem from "../components/ContactItem";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const ContactPage = () => {
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name" id="name">
                  Enter Your Name*
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email" id="email">
                  Enter Your Email*
                </label>
                <input type="text" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject" id="subject">
                  Enter Your Subject*
                </label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Enter Your Message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title="SEND EMAIL" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              icon={<PhoneIcon />}
              title="Phone"
              contact="+02 0127 9989 791"
            />
            <ContactItem
              icon={<EmailIcon />}
              title="Email"
              contact="abdelhameed.hs0@gmail.com"
            />
            <ContactItem
              icon={<LocationOnIcon />}
              title="Address"
              contact="4th-district, Obour-City, Egypt"
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
      .form-field {
        margin-bottom: 3rem;
      }
    }

    .left-content {
      .contact-title {
        h4 {
          color: var(--white-color);
          padding: 1rem 0;
          font-size: 1.8rem;
        }
      }
      .form {
        width: 100%;
        @media screen and (max-width: 620px) {
          width: 100%;
        }
        @media screen and (max-width: 510px) {
          width: 90%;
        }
        .form-field {
          margin-top: 2rem;
          position: relative;
          width: 100%;

          label {
            position: absolute;
            left: 20px;
            top: -20px;
            display: inline-block;
            background-color: var(--background-dark-color);
            padding: 0 0.5rem;
            color: inherit;
          }
          input {
            border: 1px solid var(--border-color);
            outline: none;
            background: transparent;
            height: 50px;
            padding: 0 15px;
            width: 100%;
            color: var(--white-color);
          }
          textarea {
            border: 1px solid var(--border-color);
            background-color: transparent;
            outline: none;
            color: var(--white-color);
            width: 100%;
            padding: 0.8rem 1rem;
          }
        }
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ContactPage;
