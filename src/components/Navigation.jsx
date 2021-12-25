import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../imgs/avatar.jpg";

const Navigation = ({ handleNavClick }) => {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            activeClassName="active-class"
            exact
            onClick={handleNavClick}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            activeClassName="active-class"
            exact
            onClick={handleNavClick}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            activeClassName="active-class"
            exact
            onClick={handleNavClick}
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            activeClassName="active-class"
            exact
            onClick={handleNavClick}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            activeClassName="active-class"
            exact
            onClick={handleNavClick}
          >
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            activeClassName="active-class"
            exact
            onClick={handleNavClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p> Portfolio Website @{new Date().getFullYear()}</p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;

    li {
      display: block;

      .active-class {
        background-color: var(--primary-color);
        &:hover {
          width: 96%;
          padding-left: 10px;
        }
      }

      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
          transition: all 0.4s ease-in-out;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: all 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }

        a:hover::before {
          width: 96%;
          height: 100%;
        }
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 0.6rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
