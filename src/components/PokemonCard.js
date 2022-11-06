import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import {BackdropBlur, Canvas, Fill} from '@shopify/react-native-skia'
import getColorNyPokemonType from '../utils/getColorByPokemonType'

export default function PokemonCard({pokemon}) {

    const pokemonColor = getColorNyPokemonType(pokemon.type)
    const bgColorCard  = {backgroundColor: `${pokemonColor}2a`, ...styles.card}

    const goToPokemon = () => {
        console.log(pokemon.name)
    }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>

      <View style={bgColorCard}>
        {/* <BackdropBlur style={styles.info}
          blur={4}
        >
            <Fill color="rgba(0, 0, 0, 0.8)" />
        </BackdropBlur> */}
        <Image source={pokemon.imagen} style={styles.image} />
        <View style={styles.description}>
            <Text style={styles.name}> {pokemon.name}</Text>
            <Text style={styles.order}> #{`${pokemon.order}`.padStart(3,0)}</Text>
        </View>
    </View>

    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{

        height: 140,
        // backgroundColor: "rgba(255, 255, 255, 0.12)",
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 20,
        borderRadius: 36,
        marginTop: 50,
    },
    description:{
        position: "absolute",
        width: "100%",
        height: 61,
        left: 0,
        bottom: 0,
        borderRadius: 36,
        backgroundColor: "rgba(14, 14, 14, 0.18)",
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    name:{
        fontStyle: "bold",
        fontSize: 18,
        lineHeight: 18,
        // textAlign: "center",
        color: "#FFFFFF",
    },
    order:{
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
        color: "#FFFFFF",
    },
    image:{
        position: "absolute",
        bottom: 2,
        right: 2,
        height:190,
        width: 190,
    }

})