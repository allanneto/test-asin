/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import { getSinglePokemon } from '../../services/api.services';
import { numberWith3Digits } from '../../util';
import * as Styled from './styles';

function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [type, setType] = useState('');

  const location = useLocation();

  const getPokemon = async () => {
    const [_, id] = location.pathname.split('/pokemon/');

    const response = await getSinglePokemon(id);

    const formattedPokemon = {
      ...response.data,
      types: JSON.parse(response.data.types),
      abilities: JSON.parse(response.data.abilities),
    };

    setType(formattedPokemon.types[0].type.name);

    return setPokemonData(formattedPokemon);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Header quantity="1" />

      <Styled.Container>
        {pokemonData.lenght ? (
          <h1>Carregando</h1>
        ) : (
          <Styled.Card pokeType={type}>
            <Styled.HWrapper>
              <Styled.Name>{pokemonData.name}</Styled.Name>

              <Styled.IDText>
                #{numberWith3Digits(pokemonData.poke_id)}
              </Styled.IDText>
            </Styled.HWrapper>
            <Styled.Pokemon src={pokemonData.pokemon_image} />

            <Styled.VWrapper>
              <Styled.SubTitle>Tipos do Pokemon</Styled.SubTitle>

              {pokemonData.types && (
                <Styled.Abilities>
                  {pokemonData.abilities.map((pokemonAbility, index) => (
                    <Styled.Ability key={index}>
                      {pokemonAbility.ability.name}
                    </Styled.Ability>
                  ))}
                </Styled.Abilities>
              )}
            </Styled.VWrapper>
            <Styled.VWrapper>
              <Styled.SubTitle>Informações do Pokemon</Styled.SubTitle>
              <Styled.Info>
                <Styled.Item>Altura: {pokemonData.height}</Styled.Item>
                <Styled.Item>Peso: {pokemonData.weight}</Styled.Item>
              </Styled.Info>
            </Styled.VWrapper>
            <Styled.VWrapper>
              <Styled.SubTitle>Tipos do Pokemon</Styled.SubTitle>
              {pokemonData.types && (
                <Styled.Types>
                  {pokemonData.types.map((pokemonType, index) => (
                    <Styled.Type key={index}>
                      {pokemonType.type.name}
                    </Styled.Type>
                  ))}
                </Styled.Types>
              )}
            </Styled.VWrapper>
          </Styled.Card>
        )}
      </Styled.Container>
    </>
  );
}

export default Pokemon;
