import styled from "styled-components";

const ContactItem = ({ icon, title, contact }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact}</p>
      </div>
    </ContactItemStyled>
  );
};

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    padding-right: 0;
  }
  @media screen and (max-width: 810px) {
    p {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 1.5rem 0.5rem;
    p {
      font-size: 0.68rem;
    }
  }
  @media screen and (max-width: 350px) {
    padding: 1.5rem 0.5rem;

    p {
      font-size: 0.5rem;
    }
  }

  :nth-child(1) {
    margin-top: 1.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    p {
      padding: 0.4rem 0;
    }
  }
`;

export default ContactItem;
