import { StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import { Pressable, View, Image } from 'react-native';
import Song from './Song';
import { millisToMinutesAndSeconds } from "./utils/millisToMinuteSeconds";


// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token"
};

export default function App() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      // Authenticated, make API request
      // TODO: Select which option you want: Top Tracks or Album Tracks
      myTopTracks(setTracks, token);
      //albumTracks(ALBUM_ID, setTracks, token);
    }
  }, [token]);

  let contentDisplayed = null;

  // if-else based on if authenticated or not
  if (token) {
    contentDisplayed = 
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Image style={styles.titleLogo} source={require("./assets/spotify-logo.png")} />
        <Text style={styles.titleText}>My Top Tracks</Text>
      </View>
      <FlatList
        data = {tracks} // the array of data that the FlatList displays
        renderItem = {({item , index}) => renderItem(item, index)} // function that renders each item
        keyExtractor={(item, index) => index.toString()} // unique key for each item
      />
    </View>

  } else {
    contentDisplayed = 
      <Pressable onPress={promptAsync} style={styles.press}>
        <Image style={styles.logo} source={require("./assets/spotify-logo.png")} />
        <Text style={styles.connect}>CONNECT WITH SPOTIFY</Text>
      </Pressable>  // "connect with spotify button"
  };

  // given a track, render it as a Song component
  const renderItem = ({item, index}) => (
    <Song 
      songIndex = {index}
      albumImage = {item.album.images[0].url}
      title = {item.id}
      artist = {item.artists[0].name}
      album = {item.album.name[0]}
      duration = {millisToMinutesAndSeconds(item.artists.duration_ms)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
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
    backgroundColor: Colors.background,
    alignItems: 'center',
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
