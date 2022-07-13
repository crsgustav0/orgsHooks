import React from "react";

import { SafeAreaView, StyleSheet } from 'react-native'

import Home from './src/telas/Home'

function App() {
  return <SafeAreaView style={estilos.container}>
    <Home></Home>
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App

