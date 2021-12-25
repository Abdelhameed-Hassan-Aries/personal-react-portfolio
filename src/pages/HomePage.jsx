import { useEffect, useRef } from "react";
import { init } from "ityped";
import styled from "styled-components";
import Particle from "../components/Particle";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const HomePage = () => {
  const textRef = useRef(null);
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2500,
      backSpeed: 100,
      strings: ["Engineer", "Developer", "Freelancer"],
    });
  }, []);
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>ABDELHAMEED</span>
        </h1>
        {/* <h2>Hi There, I'm</h2>
        <h1>Abdelhameed Hassan</h1> */}
        <div className="ityped-job">
          Software <span ref={textRef}></span>
        </div>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          pariatur inventore debitis repellendus velit necessitatibus quo veniam
          natus accusamus quos.
        </p> */}
        <div className="icons">
          <a
            href="https://www.facebook.com/abdelhameed.hassan95/"
            className="icon i-facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/abdelhameed-hassan"
            className="icon i-github"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelhameed-hassan-84734216a/?locale=en_US"
            className="icon i-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    @media screen and (max-width: 500px) {
      h1 {
        font-size: 3rem;
        span {
          font-size: 2.1rem;
        }
      }
    }

    .ityped-job {
      font-size: 3rem;
      margin-top: 10px;
      @media screen and (max-width: 500px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 450px) {
        font-size: 1.5rem;
      }
      span {
        font-size: 3rem;
        color: crimson;
        @media screen and (max-width: 500px) {
          font-size: 2rem;
        }
        @media screen and (max-width: 450px) {
          font-size: 1.5rem;
        }
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-facebook {
        &:hover {
          border: 2px solid #589dc5;
          color: #589dc5;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #6e5494;
          color: #6e5494;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid #2867b2;
          color: #2867b2;
        }
      }
    }
  }
`;
export default HomePage;
