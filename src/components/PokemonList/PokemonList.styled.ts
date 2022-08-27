import styled from "styled-components";

export const PokemonListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

export const GetMorePokemonsButtonStyled = styled.button`
  display: block;
  margin: 30px auto;
  background: #f6be00;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
`;
