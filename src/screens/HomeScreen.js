import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View,  Animated,
  Easing,
  TouchableHighlight
} from 'react-native';

import  {EasingFunction} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  const [count,setCount] = useState(0);
  const [stop,setStop] = useState(true);

  const myvalue = {rotateValueHolder: new Animated.Value(count)};

 const startImageRotateFunction = () => {
   Animated.timing(myvalue.rotateValueHolder, {
      toValue: 10,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

   // setCount(count + 1);
  }


  const stopAnimation = () =>{
    myvalue.rotateValueHolder.stopAnimation();
  }

 
  useEffect(()=>{
    console.log(userInfo);
  })



  useEffect(() => {
    console.log(count);
  }, [count]); // Only re-run the effect if count changes

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View><Text style={styles.welcome}>Welcome Shompa</Text></View>

    <View>
    <Animated.Image
            style={{
              width: 200,
              height: 200,
              alignSelf:"center",
              transform:
                [
                  {
                    rotate: myvalue.rotateValueHolder.interpolate(
                        {
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }
                      )
                  }
                ],
            }}
              source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',}}
          />

    </View>

      <View>
      <Button title="Spin me" color="green" onPress={startImageRotateFunction} />
      </View>

      <View>
      <Button title="Stop me" color="blue" onPress={stopAnimation} />
      </View>

      
      <Button title="Logout" color="red" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;
