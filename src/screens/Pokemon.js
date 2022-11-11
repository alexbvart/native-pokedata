import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonsDetailsByIdApi } from '../api/pokemon';
import { COLOR_BACKGROUND } from '../utils/constans';
import ArrowBack from '../icons/arrowBack'

import Types from '../components/Pokemon/Types';
import PkStats from '../components/Pokemon/Stats';
import Header from '../components/Pokemon/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/FontAwesome5'

export default function Pokemon({route, navigation}) {
  const {params} = route;
  const [pokemon, setPokemon] = useState(null)
  console.log(pokemon);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon name="arrow-left" color="#fff" size={20} 
            style={{marginLeft: 8}}
            onPress={() => navigation.goBack()} />
        // <ArrowBack onPress={() => console.log("atras")} />
      )
    })  
    return () => {   }
  }, [navigation,params])
  

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonsDetailsByIdApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  
  }, [params])

  if (!pokemon) return null;

  return (
    <ScrollView  style={styles.container}>
      <Header  pokemon={pokemon} colorBg={params.pokemonColor}/>
      <Types types={pokemon.types}/>
      <PkStats stats={pokemon.stats}  colorBg={params.pokemonColor} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLOR_BACKGROUND,
    paddingHorizontal: 24,
  }
})