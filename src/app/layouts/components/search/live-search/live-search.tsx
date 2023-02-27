import * as React from 'react';
import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import axios, { Axios } from 'axios';

import styles from './live-search.module.scss';
import * as searchService from '@/services/searchService';

/* eslint-disable-next-line */
export interface LiveSearchProps {}
interface Pokemons {
  name: string;
  url: string;
}
interface Poke {
  id: number;
  name: string;
  sprite: {
    front_default: string;
  };
}

interface Pokemon {
  name: string;
  species: string;
  img: string;
  hp: string;
  attack: string;
  defense: string;
  type: string;
}

export function LiveSearch(props: LiveSearchProps) {
  const [searchResult, setSearchResult] = useState();
  const [searchValue, setSearchValue] = useState<string>('');
  const [pokemonName, setPokemonName] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon>({
    name: '',
    species: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    type: '',
  });
  const [pokemonDefault, setPokemonDefault] = useState<Poke[]>([]);
  // useEffect(() => {
  //   const getPokemon = async () => {
  //     const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
  //     res.data.results.forEach(async (pokemon: Pokemons) => {
  //       const poke = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  //       );
  //       setPokemonDefault((p) => [...p, poke.data]);
  //     });
  //   };

  //   getPokemon();
  // }, []);

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type_name,
        });
        console.log(response);
      });
  };
  // const handleInputChange = (newValue) => {
  //   setPokemonName(newValue);
  // };
  console.log(pokemonName);
  const listPokemon = pokemonDefault.map((p) => p.name);
  return (
    <div className={styles['container']}>
      <form
        action=""
        className="flex border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto lg:mx-0"
      >
        <Stack sx={{ width: '100%' }}>
          <Autocomplete
            freeSolo
            id="live-search"
            disableClearable
            autoHighlight
            filterSelectedOptions
            loading
            isOptionEqualToValue={(option, value) => option === value}
            noOptionsText={'NO AVAILABLE POKEMONS DAYUM'}
            getOptionLabel={(listPokemon) => `${listPokemon}`}
            options={listPokemon}
            renderOption={(props, listPokemon) => (
              <Box
                component="span"
                sx={{
                  mr: 2,
                  flexShrink: 0,
                  fontSize: 16,
                  borderBottom: '1px solid #ddd',
                }}
                {...props}
                key={props.id}
              >
                {listPokemon}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nhập để tìm kiếm"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
                type="search"
              />
            )}
            size="small"
          />
        </Stack>
        <button
          title="submit"
          className="w-12 flex justify-center items-center btn--form"
          onClick={searchPokemon}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default LiveSearch;
