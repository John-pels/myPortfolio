import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body, #root {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .projects{
    .project-links,a{
      background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    text-decoration:none

    }
  }

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

   .btn-hire, 
   .btn-work{

     border: 1px solid ${({ theme }) => theme.text};
      &:hover {
              box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.text};
              transform: scale(1.02)
        }  
   }

   
   .about-btn-download,
   .about-btn-blog,
   .btn-contact{
     border: 1px solid ${({ theme }) => theme.text};
         color: ${({ theme }) => theme.text};
       &:hover {
         color: ${({ theme }) => theme.background};
        background: ${({ theme }) => theme.text};
        } 
   }




  .my-image, .about-me-picture {
    ::before{
        border: 5px solid ${({ theme }) => theme.text};
    }
  }

}
`;
