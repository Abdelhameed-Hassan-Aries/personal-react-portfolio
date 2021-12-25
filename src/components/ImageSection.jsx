import styled from "styled-components";
import resume from "../imgs/resume.jpg";
import PrimaryButton from "../components/PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Abdelhameed Hassan</span>
        </h4>
        <p className="paragraph">
          Meticulous Software Engineer with 1+ years of front-end experience and
          a passion for creating responsive website designs and a firm believer
          in mobile-first approach.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Job</p>
          </div>
          <div className="info">
            <p>: Abdelhameed Hassan Sayed</p>
            <p>: 26</p>
            <p>: Egyptian</p>
            <p>: Arabic / English / German</p>
            <p>: Cairo, Egypt</p>
            <p>: Software Engineer</p>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1F5Y_931HQdihZLcT6qUr0hk8MfeBI2Uf/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <PrimaryButton title={"Download CV"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    z-index: 1;
    img {
      height: 90%;
      width: 90%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      @media screen and (max-width: 585px) {
        .info-title {
          padding-right: 0.5rem;
          p {
            font-size: 0.9rem;
          }
        }
        .info {
          p {
            font-size: 0.9rem;
          }
        }
      }
      @media screen and (max-width: 500px) {
        .info-title {
          padding-right: 0.5rem;
          p {
            font-size: 0.9rem;
          }
        }
        .info {
          p {
            font-size: 0.9rem;
          }
        }
      }
      @media screen and (max-width: 475px) {
        .info-title {
          padding-right: 0.5rem !important;
          p {
            font-size: 0.75rem;
          }
        }
        .info {
          p {
            font-size: 0.75rem;
          }
        }
      }
      @media screen and (max-width: 360px) {
        .info-title {
          padding-right: 0.5rem;
          p {
            font-size: 0.65rem;
          }
        }
        .info {
          p {
            font-size: 0.65rem;
          }
        }
      }
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
