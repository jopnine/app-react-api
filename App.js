import React from "react";
import { StyleSheet, Text, View,StatusBar,SafeAreaView } from 'react-native';

import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor='#FFF000'
      barStyle="dark-content"
      />
      <CurrentPrice/>
      <HistoryGraphic/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop:Platform.OS === "android" ? 40: 0 // If android , will apply 40 otherwise if is IOS will aply 0.
  },
});
