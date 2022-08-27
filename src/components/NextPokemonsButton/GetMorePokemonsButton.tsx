import React from "react";
import {
  GetMorePokemonsButtonStyled,
} from "./GetMorePokemonsButton.styled";

interface GetMorePokemonsButtonProps {
  onClick: (firstData: boolean) => void;
}

export const GetMorePokemonsButton: React.FC<GetMorePokemonsButtonProps> = ({
  onClick,
}) => {
  return (
      <GetMorePokemonsButtonStyled onClick={() => onClick(false)}>Get more pokemons</GetMorePokemonsButtonStyled>
  );
};
