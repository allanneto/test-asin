/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useLocation, useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import Header from '../../components/Header';
import { getAllPokemon } from '../../services/api.services';
import * as Styled from './styles';

function Dashboard() {
  const location = useLocation();

  const [pokemonsData, setPokemonsData] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const history = useHistory();

  const getPokemons = async () => {
    if (location.search) {
      const [_, page] = location.search.split('=');

      setActualPage(Number(page));

      const response = await getAllPokemon(page, limit);

      const newArray = response.data.map(item => ({
        ...item,
        abilities: JSON.parse(item.abilities),
        types: JSON.parse(item.types),
      }));

      return setPokemonsData(newArray);
    }

    const response = await getAllPokemon();

    const newArray = response.data.map(item => ({
      ...item,
      abilities: JSON.parse(item.abilities),
      types: JSON.parse(item.types),
    }));

    return setPokemonsData(newArray);
  };

  const getPage = page => {
    setActualPage(page);

    history.push(`/?page=${page}`);
  };

  useEffect(() => {
    getPokemons(1, limit);
  }, []);

  return (
    <Styled.Container>
      <Header quantity={pokemonsData.length} />
      <Styled.Title data-cy="page-title">PokeDex</Styled.Title>
      <Styled.Content className="pokemon-card-wrapper">
        {pokemonsData.length === 0 ? (
          <h1>Carregando</h1>
        ) : (
          pokemonsData.map(pokemon => <Card data={pokemon} key={pokemon.id} />)
        )}
      </Styled.Content>
      <Styled.Parameters>
        <Styled.ParameterBox>
          <Styled.ParameterName>Página</Styled.ParameterName>
          <FiArrowLeft size={18} onClick={() => getPage(actualPage - 1)} />
          <Styled.Page onClick={() => getPage(actualPage)} selected>
            {actualPage}
          </Styled.Page>
          <Styled.Page onClick={() => getPage(actualPage + 1)}>
            {actualPage + 1}
          </Styled.Page>
          <Styled.Page onClick={() => getPage(actualPage + 2)}>
            {actualPage + 2}
          </Styled.Page>
          <Styled.Page onClick={() => getPage(actualPage + 3)}>
            {actualPage + 3}
          </Styled.Page>
          <FiArrowRight onClick={() => getPage(actualPage + 1)} size={18} />
        </Styled.ParameterBox>

        <Styled.ParameterBox>
          <Styled.ParameterName>Itens por página:</Styled.ParameterName>

          <Styled.Limit onClick={() => setLimit(20)} selected={limit === 20}>
            20
          </Styled.Limit>
          <Styled.Limit onClick={() => setLimit(40)} selected={limit === 40}>
            40
          </Styled.Limit>
          <Styled.Limit onClick={() => setLimit(60)} selected={limit === 60}>
            60
          </Styled.Limit>
        </Styled.ParameterBox>
      </Styled.Parameters>
    </Styled.Container>
  );
}

export default Dashboard;
