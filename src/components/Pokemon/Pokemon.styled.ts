import styled from "styled-components";

export const PokemonStyled = styled.div`
  height: 250px;
  max-width: 250px;
  background: #f6be00;
  border-radius: 10px;
  text-align: center;
`;

export const PokemonName = styled.p`
  font-weight: bold;
`;

export const PokemonImage = styled.img`
  height: 40%;
  margin: auto;
`;

export const PokemonParameters = styled.div`
  margin-top: 20px;
`;

export const PokemonParameter = styled.p`
  display: inline;
`;

export const PokemonParameterName = styled(PokemonParameter)`
  font-weight: bold;
`;