import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonsDetailsByIdApi } from '../api/pokemon';

export default function Pokemon({route, navigation}) {
  const {params} = route;
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonsDetailsByIdApi(params.id);
        console.log(response);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  
  }, [params])

  if (!pokemon) return null;

  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  )
}