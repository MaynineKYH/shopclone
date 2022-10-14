import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './components/screens/Home'
import MyCart from './components/screens/MyCart'
import ProductInfo from './components/screens/ProductInfo'

const App = () => {

  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='MyCart' component={MyCart}/>
        <stack.Screen name='ProductInfo' component={ProductInfo}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

//npm install @react-navigation/native
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
//npm i react-native-vector-icons
//npm i @react-native-async-storage/async-storage

//async await route params (key,value)