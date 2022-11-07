import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPokemonsDetailsByIdApi } from '../api/pokemon';
import VectorCabecera from '../components/VectorCabecera';
import { COLOR_BACKGROUND } from '../utils/constans';
import { SafeAreaView } from 'react-native-safe-area-context';


import { LinearGradient } from 'expo-linear-gradient';
import capitalize from '../utils/capitalize';

export default function Pokemon({route, navigation}) {
  const {params} = route;
  const [pokemon, setPokemon] = useState(null)
  console.log(pokemon);

  const stylesSvg = StyleSheet.create({
    svg:{

      position: "absolute",
      right:0,
      left:0,
      fill: `${params.pokemonColor}4a`,
      borderWidth: 1,
      borderColor: `${params.pokemonColor}`,
      transform: [{scaleX: 2}],
    } 
  })

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
    <SafeAreaView  style={styles.container}>
      <View style={styles.containerImage}>
        <VectorCabecera colorFill={params.pokemonColor} style={stylesSvg.svg}/> 
          
        <Image source={pokemon.sprites.other['official-artwork'].front_default} 
              style={styles.image} /> 
      </View>
      <Text style={styles.name}> {capitalize(pokemon.name)}</Text>
            <Text style={styles.order}> N° {`${pokemon.order}`.padStart(3,0)}</Text>
      
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLOR_BACKGROUND
  },
  containerImage:{
    height: "70%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  name:{
    fontStyle: "bold",
    fontSize: 20,
    lineHeight: 18,
    // textAlign: "center",
    fontWeight: "500",
    color: "#FFFFFF",
},
order:{
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
    color: "#FFFFFF",
    marginTop: 4,
},
  linear:{
    width: "100%",
    height:"100%"
  },
  image:{
    height: 280,
    width: 320,
    resizeMode: "contain"
},


})