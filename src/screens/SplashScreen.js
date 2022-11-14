import React from 'react';
import {ActivityIndicator, View,ImageBackground} from 'react-native';


const SplashScreen = () => {

  const image = require('../../assets/images/splash_background.png');

  return (
    <ImageBackground
    source={image}
    style={{
      backgroundColor: '#fc0',
      width: '100%', // applied to Image
      height: '100%' 
    }}
  //  imageStyle={{
    //  resizeMode: 'contain' // works only here!
   // }}
    >
      <View
        style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#ed0606" />
      </View>
    </ImageBackground>
    
  );
};

export default SplashScreen;
