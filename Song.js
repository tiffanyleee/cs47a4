import { StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import { Pressable, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
// import HomeStack from './Screens/HomeStack';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';


export default function Song({songIndex, albumImage, title, artist, album, duration, externalurl, previewurl}){
  const navigation = useNavigation(); 
    return(
      <View style={styles.container}>
          <Pressable onPress={(e) => {e.stopPropagation(); navigation.navigate("PreviewScreen", {previewurl: previewurl})}} style={styles.icon}> 
            <Ionicons name="play-circle" size={32} color="green" />
          </Pressable>

          <Pressable onPress={(e) => {e.stopPropagation(); navigation.navigate("DetailScreen", {externalurl: externalurl})}} style={styles.details}> 
            <Image style={styles.albImg} source={{uri: albumImage}} />  
            <View style={styles.songInfo}>
              <Text style={styles.song} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
              <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail" >{artist}</Text>
            </View>
            <Text style={styles.album} numberOfLines={2} ellipsizeMode="tail">{album}</Text>
            <Text style={styles.duration}>{duration}</Text>
          </Pressable>
      </View>
      
    );
  }

  


const styles = StyleSheet.create({
    container: {    
        padding: 8,    
        flex: 1,
        flexDirection: 'row',
      },
    
      icon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '8%',
      },

      details: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
      },

      albImg: {
        backgroundColor: 'blue',
        width: '20%',
      },
    
      songInfo: {
        padding: 5,
        width: '40%',
      },
    
      song:{
        flex: 1,
        textAlignVertical: 'center',
        fontFamily: 'Thonburi-Bold',
        color: 'white',
        alignSelf: 'flex-start',
      },
    
      artist:{
        flex: 1,
        textAlignVertical: 'center',
        fontFamily: 'Thonburi',
        color: 'grey',
      },
    
      album: {
        padding: 5,
        width: '25%',
        color: 'white',
      },
    
      duration: {
        width: '10%',
        color: 'white',
      },
});