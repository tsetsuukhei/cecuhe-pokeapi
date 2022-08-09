import axios from 'axios';

const API_URL: string = 'https://pokeapi.co/api/v2';

export const getPokemonById = (id: number): Promise<object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/pokemon/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
};

export const getPokemonTypeById = (id: number): Promise<object> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/type/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
};
