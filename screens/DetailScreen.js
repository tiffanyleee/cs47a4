// gets the url for info about song
import { StyleSheet, Text, SafeAreaView, FlatList, Button} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "../utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "../utils/constants";
import Colors from "../Themes/colors";
import { Pressable, View, Image } from 'react-native';
import Song from '../Song';
import  millisToMinutesAndSeconds  from "../utils/millisToMinuteSeconds";
import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

const Stack = createStackNavigator();

export default function DetailScreen({navigation, route}) {
    const {externalurl} = route.params

    return (
        <WebView source={{ uri: externalurl}} />
      );
    }


    const styles = StyleSheet.create({
      screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
      },

    });