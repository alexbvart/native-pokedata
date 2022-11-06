import { Text,FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonList({pokemonsList}) {

  return (
    <FlatList 
        data={pokemonsList}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)} 
        renderItem  ={({item})=> 
            <Text>{item.name}</Text>
        }
        contentContainerStyle={styles.flatListcontentContainer}
    />
  )
}

const styles = StyleSheet.create({
    flatListcontentContainer:{
        paddingVertical:6
    }

})