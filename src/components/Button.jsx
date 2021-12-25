import styled from "styled-components";

const Button = ({ filter, buttonsNames }) => {
  return (
    <ButtonsStyled>
      {buttonsNames.map((buttonName, index) => {
        return (
          <ButtonStyled key={index} onClick={() => filter(buttonName)}>
            {buttonName}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 0.7rem;
  }
`;

const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* width: 70%; */
  margin: 2.5rem auto;
  @media screen and (max-width: 740px) {
    margin-top: 0;
  }
`;

export default Button;
