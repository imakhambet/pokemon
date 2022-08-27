import Axios from "axios";

const axios = Axios.create();

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const api = {
  fetchPokemons: () => axios.get(baseUrl),
  fetchPokemonData: (pokemonName: string) =>
    axios.get(baseUrl + "/" + pokemonName),
  fetchMorePokemons: (url: string) => axios.get(url),
};
