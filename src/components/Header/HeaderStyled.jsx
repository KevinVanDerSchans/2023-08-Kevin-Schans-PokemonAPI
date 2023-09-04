import styled from "styled-components"

export const HeaderStyled = styled.header`

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url('/pokeball-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .header-container {
    display: flex;
    text-align: center;
    width: 100%;
    flex-direction: column;
  }

  .logo-container {
    margin-top: 1rem;
  }

  .pokemon-logo {
    width: 24em;
  }

  .danceButtonContainer {
    position: relative;
    right: 1.8rem;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .danceBtn {
    border-radius: 20px;
    padding: 18px;
    margin: 15px 0 0 15px;
    font-size: 1.4rem;
    font-family: inherit;
    cursor: pointer;
    background-color: #ba3535;
    color: white;
    border: none;
    animation: dance 5s infinite;
  }

  .danceBtn:hover {
    background-color: #212121;
  }

  @keyframes dance {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px) rotate(-5deg);
    }
    50% {
      transform: translateX(5px) rotate(5deg);
    }
    75% {
      transform: translateX(-5px) rotate(-5deg);
    }
  }

  .gifContainer {
    display: flex;
    position: absolute;
    top: 50px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 450px;
  }


`
