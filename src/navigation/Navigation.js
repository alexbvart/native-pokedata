import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Account        from '../screens/Account'
import FavoriteScreen from '../screens/Favorite'
import PokedexScreen  from '../screens/Pokedex'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Pokedex" component={PokedexScreen } />
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="Favorite" component={FavoriteScreen } />
    </Tab.Navigator>
  )
}