import { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Menu from "../components/Menu";
import portfolios from "../data/portfolios";
import Button from "../components/Button";
import { MainLayout, InnerLayout } from "../styles/Layouts";

const PortfolioPage = () => {
  const [menuItem, setMenuItem] = useState(portfolios);
  // const [buttonsNames] = useState(allButtonsNames);

  const allButtonsNames = [
    "All",
    ...new Set(portfolios.map((item) => item.category)),
  ];

  const filter = (allButtonsNames) => {
    if (allButtonsNames === "All") {
      setMenuItem(portfolios);
      return;
    }
    const filteredData = portfolios.filter(
      (item) => item.category === allButtonsNames
    );
    setMenuItem(filteredData);
  };
  return (
    <MainLayout>
      <PortfolioPageStyled>
        <Title title="PORTFOLIO" span="PORTFOLIO" />
        <InnerLayout>
          <Button filter={filter} buttonsNames={allButtonsNames} />
          <Menu menuItem={menuItem} />
        </InnerLayout>
      </PortfolioPageStyled>
    </MainLayout>
  );
};

const PortfolioPageStyled = styled.section``;

export default PortfolioPage;
