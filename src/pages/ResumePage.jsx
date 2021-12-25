import styled from "styled-components";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import { MainLayout } from "../styles/Layouts";

const ResumePage = () => {
  return (
    <MainLayout>
      <ResumePageStyled>
        <Skills />
        <Resume />
      </ResumePageStyled>
    </MainLayout>
  );
};
const ResumePageStyled = styled.section``;

export default ResumePage;
