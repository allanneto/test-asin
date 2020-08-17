import api from './api';

const getAllPokemon = async (page = 1, limit = 20) => {
  const response = await api.get('/pokemon', {
    params: {
      page,
      limit,
    },
  });

  return response;
};

const getSinglePokemon = async id => {
  const response = await api.get(`/pokemon/${id}`);

  return response;
};

export { getAllPokemon, getSinglePokemon };
