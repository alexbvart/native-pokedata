import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'
import { COLOR_TEXT } from '../../utils/constans';

export default function Stats({stats,colorBg}) {
    console.log(stats,colorBg);

    const colorBar   = { 
        backgroundColor: colorBg,
    ...styles.bar}

    const bgColorBar = { 
        backgroundColor: `${colorBg}2a`,
        borderWidth: 1,
        borderColor: `${colorBg}`,
    ...styles.bgbar}

    const barWidthValue = (value) => {
        return{
            width: `${value}%`
        }
    }

  return (

    <View style={styles.content}>
        <Text style={styles.title}>Base Stat</Text>
        {map(stats,(item,index ) => (
            <View key={index} style={styles.block}>
                <Text style={styles.statName}>
                    {capitalize(item.stat.name)} 
                </Text>
                <View style={styles.barBlock}>
                    <Text style={styles.number}>{item.base_stat}</Text>
                    <View style={bgColorBar}>
                        <View style={[colorBar,barWidthValue(item.base_stat)]} />
                    </View>
                </View>
            </View>
        )
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:"column",
        padddingHorizontal: 20,
        marginBottom: 80,
        marginTop: 24,
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
        color: COLOR_TEXT,
    },
    statName:{
        color: `${COLOR_TEXT}99`,
    },
    block:{
        color: COLOR_TEXT,
        // flexDirection: "row",
        paddingVertical: 6,
    },
    barBlock:{
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 2,
    },
    number:{
        color: `${COLOR_TEXT}99`,
        width: "12%",
        fontSize: 12,
    },
    bgbar:{
        width:"88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    bar:{
        height:5,
        borderRadius: 20,
    }
})