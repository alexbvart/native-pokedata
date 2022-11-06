import { Text,FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({pokemonsList}) {

  return (
    <FlatList 
        data={pokemonsList}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)} 
        renderItem  ={({item})=> 
            <PokemonCard pokemon={item} />
        }
        contentContainerStyle={styles.flatListcontentContainer}
    />
  )
}

const styles = StyleSheet.create({
    flatListcontentContainer:{
        flex: 1,
        paddingVertical:24,
        paddingHorizontal: 24,
        backgroundColor: "#131313",
        gap: 24
    }

})