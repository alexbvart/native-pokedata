import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import Account        from '../screens/Account'
import FavoriteScreen from '../screens/Favorite'
import PokedexScreen  from '../screens/Pokedex'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>

      <Tab.Screen 
        name="Favorite" component={FavoriteScreen }
        options={{
          tabBarLabel:"Favoritos",
          tabBarIcon: ({color,size}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen 
        name="Pokedex" component={PokedexScreen } 
        options={{
          tabBarLabel:"",
          tabBarIcon: () => renderPokeballIcon()
        }}
      />

      <Tab.Screen 
        name="Account" component={Account} 
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon :({color,size}) => (
            <Icon name="user" color={color} size={size}/>
          ),
        }}
      />  
    </Tab.Navigator>
  )
}

//Render the pokeball image as icon
function renderPokeballIcon() {
  return ( 
    <Image 
      source={require("../assets/PokeBall.png")}
      style={{
        width: 40, height: 40, top: -20,
      }}
    />
   );
}
