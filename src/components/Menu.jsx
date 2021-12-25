import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Menu = ({ menuItem }) => {
  return (
    <MenuStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1} target="_blank" rel="noreferrer">
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2} target="_blank" rel="noreferrer">
                      <LinkedInIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .portfolio-content {
      display: block;
      .portfolio-image {
        position: relative;
        overflow: hidden;
        &::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 15px;
          width: 0;
          height: 0;
          transition: all 0.4s ease-in-out;
        }
        img {
          width: 100%;
          height: 30vh;
          object-fit: cover;
        }
        ul {
          transform: translateY(-600px);
          transition: all 0.4s ease-in-out;
          position: absolute;
          left: 50%;
          top: 50%;
          opacity: 0;
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            background-color: var(--border-color);
            border-radius: 50%;
            margin: 0 0.5rem;
            width: 3rem;
            height: 3rem;
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                font-size: 2rem;
              }
            }
          }
        }
      }
      .portfolio-image:hover {
        ul {
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                font-size: 2rem;
              }
            }
          }
          li:hover {
            svg {
              color: var(--white-color);
            }
          }
        }
        &::before {
          content: "";
          position: absolute;
          left: 15px;
          top: 15px;
          height: calc(100% - 30px);
          width: calc(100% - 30px);
          background-color: #8f8f8fb8;
          opacity: 0.9;
          transform-origin: left;
          transition: all 0.4s ease-in-out;
        }
      }
      h6 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Menu;
