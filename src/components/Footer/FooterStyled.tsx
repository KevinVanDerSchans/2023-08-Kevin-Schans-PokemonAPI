import styled from 'styled-components';

export const FooterStyled = styled.footer`

  display: flex;
  position: relative;
  height: 44px;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  color: rgb(192, 186, 186);
  background-color: rgb(80, 79, 79);
  z-index: 2;


  .text-footer-container {
    text-align: center;
  }

  .developer-name {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .social-media-footer-container {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin: 2px 30px 0 0;
  }

  .linkedin-logo {
    bottom: 0;
    right: 0;
    color: rgb(232, 228, 228);
    font-size: 2.4rem;
    margin-right: 4px;
  }

  .linkedin-logo:hover {
    color: rgb(167, 92, 92);
  }
`;