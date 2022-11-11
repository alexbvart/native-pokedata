import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { map } from 'lodash';
import getIconByPokemonType from '../../utils/getIconByPokemonType';
import getColorNyPokemonType from '../../utils/getColorByPokemonType';
import { color } from 'react-native-reanimated';

export default function Types({types}) {

  return (
    <View style={styles.content}>
      {map( types, (item, index)=>(
        <View key={index} 
            style={{
                backgroundColor: `${getColorNyPokemonType(item.type.name)}2a`,
                borderWidth: 1,
                borderColor: `${getColorNyPokemonType(item.type.name)}`,
                ...styles.pill }}
            >
            <Image style={styles.image} source={getIconByPokemonType(item.type.name)} />
            <Text style={styles.typesText}>{item.type.name}</Text>
        </View>
      ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        marginTop: 12,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        gap: 4,

    },
    typesText:{
        fontStyle: "normal",
        fontSize: 14,
        lineHeight: 18,
        color: "#FFFFFF",
        marginTop: 4,
    },
    pill:{
        flexDirection: "row",
        borderRadius: 30,
        padding:8,
        backgroundColor: "#ffffff0f",
        gap:4,
    },
    image:{
        height: 26,
        width:  26,
        resizeMode: "contain",
        borderRadius: 50,
    },
})