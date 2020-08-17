import React from 'react';
import { useHistory } from 'react-router-dom';

import { numberWith3Digits } from '../../util';
import * as Styled from './styles';

function Card({ data }) {
  const history = useHistory();

  return (
    <Styled.Container
      onClick={() => history.push(`/pokemon/${data.poke_id}`)}
      pokeType={data.types[0].type.name}
    >
      <Styled.Content>
        <Styled.IDText>#{numberWith3Digits(data.poke_id)}</Styled.IDText>

        <Styled.PokemonInfo>
          <Styled.Info>
            <Styled.Name>{data.name}</Styled.Name>
            {data.types.map(pokemonType => (
              <Styled.Types key={data.types.indexOf(pokemonType)}>
                {pokemonType.type.name}
              </Styled.Types>
            ))}
          </Styled.Info>
          <Styled.PokemonImage
            src={data.pokemon_image}
            alt={`front sprite of ${data.name}`}
          />
        </Styled.PokemonInfo>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Card;
