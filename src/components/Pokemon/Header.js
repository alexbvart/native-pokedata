import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { capitalize } from 'lodash';
import { COLOR_BACKGROUND } from '../../utils/constans';

export default function Header({pokemon,colorBg}) {
    console.log(colorBg);
  const imageBgColor = [{ 
    // backgroundColor: `${colorBg}2a`,
    borderWidth: 1,
    borderColor: `${colorBg}`,
    ...styles.bg}]

  return (
    <>
        <LinearGradient style={imageBgColor} colors={[colorBg,`${colorBg}2a`]}/>
        <SafeAreaView>
            <View style={styles.containerImage}>
                <Image source={pokemon.sprites.other['official-artwork'].front_default} 
                       style={styles.image} />
            </View>
        </SafeAreaView>     
        <Text  style={styles.name}>{capitalize(pokemon.name)}</Text>
        <Text  style={styles.order}> N° {`${pokemon.order}`.padStart(3,0)}</Text>
    </>
  )
}


const styles = StyleSheet.create({
    container:{
      backgroundColor: COLOR_BACKGROUND,
      paddingHorizontal: 24,
    },
    bg:{
        width: "120%",
        height: 280,
        position: "absolute",
        borderBottomEndRadius: 450,
        borderBottomLeftRadius: 450,
        paddingHorizontal: -24,
        transform: [{scaleX: 2, translateX: -24}],
    },
    containerImage:{
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
      paddingTop: 8,
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