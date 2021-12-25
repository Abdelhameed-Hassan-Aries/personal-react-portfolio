import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    /* :root {
        --background-color: #ce2a2a;
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

    } */

    .light-theme{
        --background-color: #ce2a2a;
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #F1F1F1;
        --background-dark-grey: #e4e4e4;
        --border-color: #cbced8;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #030202;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

    }

    .dark-theme{
        --background-color: #ce2a2a;
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);

        ::-webkit-scrollbar{
            width: 9px;
            background-color: #383838;
    }

        ::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background-color: #6b6b6b;

        }

        ::-webkit-scrollbar-track{
            border-radius: 10px;
            background-color: #383838;

        }
    }
    
    a {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-size: 1rem;
    }

    h1 {
        font-size: 4rem;
        color: var(---white-color);
        span {
            font-size: 4rem;
        @media screen and (max-width: 660px) {
            font-size: 3.5rem;
        }
        @media screen and (max-width: 600px) {
            font-size: 3rem;
        }
        @media screen and (max-width: 500px) {
            font-size: 2rem;
      }
    }    
          @media screen and (max-width: 660px) {
            font-size: 3.5rem;
        }
        @media screen and (max-width: 600px) {
            font-size: 3rem;
        }
        @media screen and (max-width: 500px) {
            font-size: 2rem;
      }
    }
    
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }

    span {
        color: var(--primary-color) ;
    }

    //Floating Toggler
    .light-dark-mode {
        position: fixed;
        right: 0;
        top: 50%;
        background-color: var(--background-light-color-2);
        width: 6.5rem;
        height: 2.5rem;
        z-index: 15;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
        }
    }

    //Nav Toggler
       .hamburger-menu{
        display:none;
        position: absolute;
        right:5%;
        top:5%;
        z-index: 15;
        svg{
            font-size: 3rem;
        }
    }

    .nav-toggler{
        transform: translateX(0);
        z-index: 20;
    }
      @media screen and (max-width: 1200px) {
       .hamburger-menu{
        display:block;
        position: absolute;
        right:5%;
        top:3%;
    }
  }
      @media screen and (max-width: 600px) {
       .hamburger-menu{
        right:0%;

    }
  }


    //Global Media queries
`;

export default GlobalStyle;
