import styled from "styled-components";

const PrimaryButton = ({ title }) => {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

const PrimaryButtonStyled = styled.div`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }

  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default PrimaryButton;
