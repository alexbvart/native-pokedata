import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {BackdropBlur, Canvas, Fill} from '@shopify/react-native-skia'
import getColorNyPokemonType from '../utils/getColorByPokemonType'
import capitalize from '../utils/capitalize'
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard({pokemon}) {

    const navigation = useNavigation();

    // Doy estilos al card con los colores segun el tipo de pokemon
    const pokemonColor = getColorNyPokemonType(pokemon.type)
    const bgColorCard  = { backgroundColor: `${pokemonColor}2a`,
                            borderWidth: 1,
                            borderColor: `${pokemonColor}`,
                         ...styles.card}


    const goToPokemon = () => {
        navigation.navigate("Pokemon", { id: pokemon.id ,
                                         pokemonColor: pokemonColor,
                                         pokemonName: pokemon.name})
        console.log(pokemon.id)
    }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>

      <View style={bgColorCard}>
        {/* <BackdropBlur style={styles.info}
          blur={4}
        >
            <Fill color="rgba(0, 0, 0, 0.8)" />
        </BackdropBlur> */}
        <Text style={styles.type} numberOfLines = {1}> 
            {`${pokemon.type}`.toUpperCase()}
        </Text>
        <Image source={pokemon.imagen} style={styles.image} />
        <LinearGradient
            // Button Linear Gradient
            colors={['#0E0E0E0f', '#5656560f']} 
            style={styles.description}>
            <Text style={styles.name}> {capitalize(pokemon.name)}</Text>
            <Text style={styles.order}> #{`${pokemon.order}`.padStart(3,0)}</Text>
        </LinearGradient>
    </View>

    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{
        // flex: 1,
        minHeight: 140,
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
        height: 60,
        left: 0,
        bottom: 0,
        borderBottomRightRadius: 36,
        borderBottomLeftRadius: 36,
        backgroundColor: "rgba(14, 14, 14, 0.18)",
        paddingHorizontal: 24,
        paddingVertical: 12,
        gap: 2,
        
    },
    name:{
        fontStyle: "bold",
        fontSize: 18,
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
        marginTop: 2,
    },
    type:{
        color: "rgba(255, 255, 255, 0.05)",
        fontStyle: "bold",
        fontWeight: "600",
        fontSize: 60,
        // lineHeight: 18,
        width: "90%",
        height: "100%",
        padStart: 20,
    },
    image:{
        position: "absolute",
        bottom: 2,
        right: 2,
        height:196,
        width: 196,
    }

})