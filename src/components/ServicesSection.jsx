import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";
import design from "../imgs/design.svg";
import intelligence from "../imgs/intelligence.svg";
import gamedev from "../imgs/logo.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Development"}
            paragraph={
              "Creating responsive websites and stunning visual elements of web applications by translating UI/UX designs high quality code."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Cloud Integration"}
              paragraph={
                "Able to integrate work needs with cloud service providers such as AWS and fully use their services to facilitate workflow."
              }
            />
          </div>

          <ServiceCard
            image={gamedev}
            selectWidth="4.2rem"
            title={"Infrastructure Configuration"}
            paragraph={
              "App dockerization knowledge, full infrastructue set-up using terraform and writing pipelines scripts for CI/CD deployments."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.div`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
