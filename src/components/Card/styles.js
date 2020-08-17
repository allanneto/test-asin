/* eslint-disable consistent-return */
import styled from 'styled-components';

const selectType = type => {
  switch (type) {
    case 'grass':
      return '#48d0b0';
    case 'fire':
      return '#fb6c6c';
    case 'water':
      return '#77bdfe';
    case 'normal':
      return '#cd835a';
    case 'bug':
      return '#6a8b5a';
    default:
      return '#ccc';
  }
};

export const Container = styled.div.attrs(props => ({
  pokeType: props.pokeType,
}))`
  background-color: ${props => selectType(props.pokeType)};
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  max-width: calc(50% - 4px);

  padding: 8px;
  margin: 4px 0;

  color: #ffffff;

  text-transform: capitalize;

  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

  cursor: pointer;
  transition: opacity 200ms;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 1000px) {
    max-width: 18%;
    margin: 8px;
  }
`;

export const Content = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const IDText = styled.strong`
  align-self: flex-end;
  opacity: 0.7;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const PokemonInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.strong`
  margin-bottom: 10px;
`;

export const Types = styled.strong`
  font-size: 0.8em;
  margin: 2px;
  padding: 2px;
  text-align: center;
  border-radius: 10px;
  backdrop-filter: brightness(85%);
`;

export const PokemonImage = styled.img`
  background: #ccc;
`;
