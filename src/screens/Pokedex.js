import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import {getPokemonsApi, getPokemonsDetailsByUrlApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList'

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    ( async () => {
      await loadPokemons();
    })();
    
  }, []);
  
  const loadPokemons = async() => {
    try {
      const response = await getPokemonsApi();

      // Recorrer el response, para traer sus detalles de cada pokemon
      const pokemonList = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url);
        pokemonList.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork'].front_default,
        })
      }
      setPokemons([...pokemons, ...pokemonList])
      
    } catch (error) {
      throw error;
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemonsList={pokemons}/> 
    </SafeAreaView>
  )
}