export interface IPokemonInfo {
  name: string;
  url: string;
}

export interface IFetchPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonInfo[];
}

export interface IPokemonDetails {
  base_experience: number;
  weight: number;
  height: number;
  sprites: {
    other: {
      dream_world: {
        // Pokemon image
        front_default: string;
      };
    };
  };
}

export interface IPokemon {
  info: IPokemonInfo;
  details: IPokemonDetails;
}
