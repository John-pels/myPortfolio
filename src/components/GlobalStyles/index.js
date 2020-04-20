import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body, #root {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};


  a,.icon{
    color: ${({ theme }) => theme.text};
  }

  .border-b {
          border-bottom: 3px solid ${({ theme }) => theme.text};
  }

   .contact-details{

    .contact__icon {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.background}
        &:before {
          background: ${({ theme }) => theme.text};
        }
      }
     .contact__texts {
        border-left: 5px solid ${({ theme }) => theme.text};
        box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.text};
      }
   }

   .about-btn-download,.about-btn-blog, .btn-hire,.btn-work, .btn-contact{
     border: 1px solid ${({ theme }) => theme.text};

       &:hover {
        background: ${({ theme }) => theme.text};
         color: ${({ theme }) => theme.background};
        
        }  
  }


  .my-image, .about-me-picture {
    ::before{
        border: 5px solid ${({ theme }) => theme.text};
    }
  }


 

  .social-media{
     .twitter {
        a {
          transition: all 0.5s ease-in-out;

          &:hover {
            color: #2591db;
          }
        }
      }

      .github {
        a {
          transition: all 0.5s ease-in-out;

          &:hover {
            color: #24292e;
          }
        }
      }

      .email {
        a {
          transition: all 0.5s ease-in-out;

          &:hover {
            color: rgb(6, 52, 99);
          }
        }
      }

      .linkedin {
        a {
          transition: all 0.5s ease-in-out;

          &:hover {
            color: #1d77b5;
          }
        }
      }

      .instagram {
        a {
          transition: all 0.5s ease-in-out;

          &:hover {
            color: #ad499d;
          }
        }
      }

      .facebook {
        a {
          transition: all 0.5s ease-in-out;

          &:hover {
            color: #4267b2;
          }
        }
      }

      .medium {
        a {
          transition: all 0.5s ease-in-out;

          &:hover {
//   .btn-contact {
//       color:${({ theme }) => theme.text};
//     border: 1px solid ${({ theme }) => theme.text};
      
//       &:hover {
//       color:${({ theme }) => theme.text};

//       }
//   }
            color: #292929;
          }
        }
      }
  }

//   .btn-contact {
//       color:${({ theme }) => theme.text};
//     border: 1px solid ${({ theme }) => theme.text};
      
//       &:hover {
//       color:${({ theme }) => theme.text};

//       }
//   }
}
`;
