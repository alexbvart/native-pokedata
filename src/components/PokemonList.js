import { Text,FlatList, StyleSheet , ActivityIndicator, Platform} from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({pokemonsList,loadMorePokemons,isNext}) {

  // isNext valida si hay recursus que pedir a la api

  const loadMore=()=>{
    loadMorePokemons();
  }
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
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext &&
          <ActivityIndicator 
            size="large"
            style={styles.spinner}
            // color="ffffff"
          />
        }
    />
  )
}

const styles = StyleSheet.create({
    flatListcontentContainer:{
        flex: 1,
        paddingVertical:24,
        paddingHorizontal: 24,
        backgroundColor: "#131313",
        gap: 24,
        marginTop: Platform.OS === "android" ? 30 : 10,
    },
    spinner:{
      marginTop: 20,
      marginBottom: Platform.OS === "android" ? 90 : 60,
    }

})