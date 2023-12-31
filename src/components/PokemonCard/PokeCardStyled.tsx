import styled from 'styled-components';
import { Props } from './PokeCard';

export const CardStyled = styled.article<Props>`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 8px;
  width: 250px;
  height: 300px;
  transition: transform 0.3s ease;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 20px;
  border: 2px solid #ced4da;
  border-radius: 15px;
  margin-bottom: 1rem;
  -webkit-box-shadow: 3px 6px 13px -1px rgba(11, 11, 11, 0.84);
  box-shadow: 3px 6px 13px -1px rgba(7, 7, 7, 0.84);
  background-color: transparent;

    &:hover {
      transform: scale(1.05);
      filter: brightness(0.8) saturate(0.5);
    }

  .pokemon-info {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px 15px;
    justify-content: space-between;
    background-color: #e4a59f;
    border-radius: 10px;

    .pokemon-name {
      font-size: 1.4rem;
      font-style: italic;
      text-transform: capitalize;
      max-width: 150px;
    }

    .pokemon-id {
      font-size: 1.2rem;
      visibility: ${(props) =>
        props.pokemon.id < 10000 ? `visible` : 'hidden'};
    }
  }

  .pokemon-img {
    min-width: 100px;
    max-height: 150px;
  }

  .types {
    display: flex;
    align-items: center;
  }


  @media (max-width: 769px) {
    width: 220px;
    height: 300px;

    .pokemon-img {
      min-width: 120px;
      max-height: 150px;
    }

    .pokemon-info {

      .pokemon-name {
        font-size: 1.2rem;
      }

      .pokemon-id {
        font-size: 0.8rem;
      }
    }
  }
`;
