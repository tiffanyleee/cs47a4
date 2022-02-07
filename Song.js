import { StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import { Pressable, View, Image } from 'react-native';


export default function Song({songIndex, albumImage, title, artist, album, duration}){
    return(
      <View key={item.id} style={styles.item}>
        <Image style={styles.image} source={albumImage}/>
        <View style={styles.songinfo}>
          <Text style={styles.song}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
        <Text style={styles.album}>{album}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
    
      albumImage: {
        flex: 2,
        resizeMode: 'contain',
        alignContent: 'center',
      },
    
      songinfo: {
        flexDirection: 'column',
        flex: 5,
      },
    
      song:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Thonburi-Bold',
        color: 'white',
      },
    
      artist:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Thonburi',
        color: 'white',
      },
    
      album: {
        flex: 2,
      },
    
      duration: {
        flex: 1,
      },
});