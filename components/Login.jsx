import React from 'react'

import {
  View, Button
} from 'react-native';

const handleCLick = ()=>{
 
  const clientId ="80d018cbb2a54b55a5bce43353c0f9a2";
  const redirectUrl = "http://localhost:3000/";
  const apiUrl = "https://accounts.spotify.com/authorize";
  const scope = ['user-read-email',
                  'user-read-private',
                  'user-read-playback-state',
                  'user-modify-playback-state',
                  'user-read-currently-playing',
                  'user-read-playback-position',
                  'user-top-read',
                  'user-read-recently-played'];
window.location.href= `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`;
}
export default function Login() {
  return (
    <View>
      <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' 
      alt='Spotify logo'/>
      
      <Button onPress={() => handleCLick()} title="Press to login"/>
    </View>
  )
}