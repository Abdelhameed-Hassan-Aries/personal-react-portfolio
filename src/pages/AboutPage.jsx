import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";
// import ReviewsSection from "../components/ReviewsSection";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
        {/* <ReviewsSection /> */}
      </AboutStyled>
    </MainLayout>
  );
};

const AboutStyled = styled.section``;
export default AboutPage;
