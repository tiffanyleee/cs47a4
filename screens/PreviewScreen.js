// return the webview component
// get the url and import { StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
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


export default function PreviewScreen({navigation, route}) {
    const {previewurl} = route.params


    return (
        <WebView source={{ uri: previewurl}} />
      );
    }

    const styles = StyleSheet.create({
      screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
      },

    });