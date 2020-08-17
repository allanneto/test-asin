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

export const Container = styled.div`
  background-color: #fff;

  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div.attrs(props => ({
  pokeType: props.pokeType,
}))`
  background-color: ${props => selectType(props.pokeType)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 80%;
  padding: 1.5rem;

  border-radius: 0.4rem;

  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const HWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Pokemon = styled.img`
  width: 300px;
  height: 300px;
`;

export const Abilities = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Ability = styled.strong`
  background: #eee;
  padding: 5px 10px;
  border-radius: 0.4rem;
  font-size: 1.5rem;
`;

export const Name = styled.h2`
  font-weight: bold;
`;

export const IDText = styled.strong`
  font-size: 1.3rem;
  align-self: flex-end;
  opacity: 0.7;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  align-items: center;
  justify-content: space-evenly;
`;

export const Item = styled.strong`
  font-size: 1.3rem;
  background: #ccc;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.5rem;
`;

export const SubTitle = styled.h2`
  border-bottom: 3px solid #000;
  margin-bottom: 15px;
`;

export const Types = styled.div`
  display: flex;
`;

export const Type = styled.strong`
  font-size: 1.3em;
  margin: 2px;
  padding: 2px;
  text-align: center;
  border-radius: 10px;
  backdrop-filter: brightness(85%);
`;

export const VWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
