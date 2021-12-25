import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title="SKILLS" span="SKILLS" />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"95%"} text={"95%"} />
          <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"85%"} text={"85%"} />
          <ProgressBar title={"REACT JS"} width={"75%"} text={"75%"} />{" "}
          <ProgressBar title={"DOCKER"} width={"70%"} text={"70%"} />
          <ProgressBar title={"TERRAFORM"} width={"75%"} text={"75%"} />
          <ProgressBar title={"AWS"} width={"60%"} text={"60%"} />
          <ProgressBar title={"C++"} width={"50%"} text={"50%"} />
          <ProgressBar title={"JIRA"} width={"90%"} text={"90%"} />{" "}
          <ProgressBar title={"BITBUCKET"} width={"90%"} text={"90%"} />{" "}
          <ProgressBar title={"LINUX"} width={"90%"} text={"90%"} />{" "}
          <ProgressBar title={"ENGLISH"} width={"95%"} text={"95%"} />
          <ProgressBar title={"GOOGLING"} width={"100%"} text={"100%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.div`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
