import React from "react";
import { IPokemon } from "../../types";
import {
  PokemonImage,
  PokemonName,
  PokemonParameter,
  PokemonParameterName,
  PokemonParameters,
  PokemonStyled,
} from "./Pokemon.styled";

interface PokemonProps {
  pokemon: IPokemon;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <PokemonStyled>
      <PokemonName>{pokemon.info.name}</PokemonName>
      <PokemonImage
        src={pokemon.details.sprites.other.dream_world.front_default}
      ></PokemonImage>
      <PokemonParameters>
        <div>
          <PokemonParameterName>Experience: </PokemonParameterName>
          <PokemonParameter>{pokemon.details.base_experience}</PokemonParameter>
        </div>
        <div>
          <PokemonParameterName>Weight: </PokemonParameterName>
          <PokemonParameter>{pokemon.details.weight}</PokemonParameter>
        </div>
        <div>
          <PokemonParameterName>Height: </PokemonParameterName>
          <PokemonParameter>{pokemon.details.height}</PokemonParameter>
        </div>
      </PokemonParameters>
    </PokemonStyled>
  );
};
