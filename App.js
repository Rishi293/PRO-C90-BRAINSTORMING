import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Loginscreen from './Screens/Loginscreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Questionscreen from './Screens/Questionscreen'
import Resultscreen from './Screens/Resultscreen'

export default class App extends React.Component {
  render(){


  
  return (
    <View style={styles.container}>
     <AppContainer/>
    </View>
  );
}
}

const swicthnavigator=createSwitchNavigator({
  Loginscreen:Loginscreen,
  Questionscreen:Questionscreen,
  Resultscreen:Resultscreen
})

const AppContainer=createAppContainer(swicthnavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
