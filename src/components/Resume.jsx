import styled from "styled-components";
import Title from "../components/Title";
import SmallTitle from "../components/SmallTitle";
import ResumeItem from "../components/ResumeItem";
import { InnerLayout } from "../styles/Layouts";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";

const Resume = () => {
  return (
    <ResumeStyled>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle
            icon={<BusinessCenterIcon />}
            title={"Working Experience"}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - Present"}
            title="WeXcute"
            subtitle="Front-end Engineer"
            text="Responsible for creating responsive websites and mobile applications by using the best software development practices, produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using frameworks such as react,angular."
          />

          <div className="u-margin-bottom">
            <ResumeItem
              year={"2020 - 2021"}
              title="Baddel Inc"
              subtitle="Junior Software Engineer"
              text="Developed and implemented scalable, reusable, secure baddel node app on a Raspberry PI using Node JS, implemented the AWS infrastructure, dockerized the baddel project and writing the docker compose files to link containers, participated and developed pipelines for the baddel project for CI/CD deployments."
            />
          </div>
        </div>
        <div className="small-title">
          <SmallTitle icon={<SchoolIcon />} title={"Education"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2013 - 2018"}
            title="Higher Technological Institute"
            subtitle="Mechatronics Engineer"
            text="Studied various Engineering fields: Mechanical Design, Thermo Dynamics, Fluid Dynamics, Combustion Engines and Computer Science, Participated in over 10 practical engineering labs in varying fields from physics to PLC, received 4 different trainings, Awarded Honorary Recognition for excellent grades from 2013-2017"
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
    .u-margin-bottom {
      margin-bottom: 4rem;
    }
  }
`;
export default Resume;
