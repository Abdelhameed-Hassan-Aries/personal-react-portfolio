import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { IconButton, Switch as SwitchIcon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// 7.27

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const handleNavClick = () => {
    setNavToggle(!navToggle);
    console.log("clicked");
  };

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} handleNavClick={handleNavClick} />
      <div className="light-dark-mode">
        <div className="left-content">
          <Brightness4Icon />
        </div>
        <div className="right-content">
          <SwitchIcon
            value=""
            inputProps={{ "aria-label": "" }}
            size="medium"
            onClick={themeToggler}
          />
        </div>
      </div>

      <div className="hamburger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage />
          </Route>
          <Route path="/blog" exact>
            <BlogPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -999;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
export default App;
