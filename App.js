import { StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import { Pressable, View, Image } from 'react-native';
import Song from './Song';
import  millisToMinutesAndSeconds  from "./utils/millisToMinuteSeconds";
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from "./screens/MainScreen";
import DetailScreen from "./screens/DetailScreen";
import PreviewScreen from "./screens/PreviewScreen";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Song Details' }}/>
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} options={{ title: 'Song Preview' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  
  button: {
    backgroundColor: Colors.background,
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",

  },

  press: {
    flexDirection: 'row',
    backgroundColor: 'green',
    height: "5%",
    width: "60%",
    borderWidth: 0,
    borderRadius: 99999,
    borderColor: 'white',
    alignItems: 'center',
  },

  logo: {
    flex: 1,
    resizeMode: 'contain',
    height: '70%',
    width: '70%',
    alignContent: 'center',
  },

  connect: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Thonburi-Bold',
    color: 'white',
    marginRight: 8,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  titleLogo: {
    flex: 1,
    resizeMode: 'contain',
    height: '70%',
    width: '70%',
  },

  titleText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Thonburi-Bold',
    fontWeight: 'bold',
    color: 'white',
  },
});
