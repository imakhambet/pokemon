import React, { useEffect, useState } from "react";
import { api } from "../../lib/api";
import {
  IFetchPokemonResponse,
  IPokemon,
  IPokemonInfo,
  IPokemonDetails,
} from "../../types";
import { Pokemon } from "../Pokemon/Pokemon";
import { GetMorePokemonsButtonStyled, PokemonListStyled } from "./PokemonList.styled";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState("");

  const getData = async (firstData: boolean) => {
    try {
      const response = firstData
        ? await api.fetchPokemons()
        : await api.fetchMorePokemons(nextUrl);
      const responseData: IFetchPokemonResponse = response.data;
      console.log(responseData);
      responseData.results.forEach((pokemon) => {
        getPokemonData(pokemon).then((pokemonData) => {
          if (pokemonData) {
            setPokemons((pokemons) => [...pokemons, pokemonData]);
          }
        });
      });
      setNextUrl(responseData.next);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonData = async (pokemon: IPokemonInfo) => {
    try {
      const response = await api.fetchPokemonData(pokemon.name);
      const details: IPokemonDetails = response.data;
      const result: IPokemon = {
        info: pokemon,
        details: details,
      };
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(true);
  }, []);

  return (
    <>
      <PokemonListStyled>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.info.name} pokemon={pokemon} />
        ))}
      </PokemonListStyled>
      <GetMorePokemonsButtonStyled onClick={() => getData(false)}>Get more pokemons</GetMorePokemonsButtonStyled>
    </>
  );
};
