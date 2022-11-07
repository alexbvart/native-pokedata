import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import {getPokemonsApi, getPokemonsDetailsByUrlApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import { COLOR_BACKGROUND } from '../utils/constans'

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([])
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    ( async () => {
      await loadPokemons();
    })();
    
  }, []);
  
  const loadPokemons = async() => {
    try {
      const response = await getPokemonsApi(pagination);

      // Agrego la url de la siguiente peticion 
      setPagination(response.next)

      // Recorro el response, para traer sus detalles de cada pokemon
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
    <SafeAreaView style={styles.sav}>
      <PokemonList 
        pokemonsList={pokemons}
        loadMorePokemons={loadPokemons}
        isNext={pagination}
        /> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sav:{
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  }

})
