import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, Text,TextInput , View,  Animated,
  Easing,
  TouchableHighlight
} from 'react-native';

import  {EasingFunction} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  const [count,setCount] = useState(1);
  const [betamount,setBetamount] = useState();
  const [stop,setStop] = useState(true);
  const startdeg = Math.floor(Math.random() * 10) + 1;
  const enddegree = Math.floor(Math.random() * 700) + 1;
  const [degreestart,SetDegreestart] = useState(`${startdeg}deg`);
  const [degreeend,SetDegreeend] = useState(`${enddegree}deg`);

  const myvalue = {rotateValueHolder: new Animated.Value(count)};

  const roulette = require('../../assets/images/roulette.png');

 const startImageRotateFunction = () => {
   Animated.timing(myvalue.rotateValueHolder, {
      toValue: 10,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }

  const startRoulette = () =>{
    setCount(count+1);
  }

  const stopAnimation = () =>{
    myvalue.rotateValueHolder.stopAnimation();
  }
 
  useEffect(()=>{
    console.log(userInfo);
  })


  useEffect(() => {
    startImageRotateFunction();
    console.log(count);
  }, [count]); // Only re-run the effect if count changes

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View><Text style={styles.welcome}>Welcome to Lotto</Text></View>
    <View>


    <View>
        <View>
          <TextInput
            style={styles.input} 
            value={betamount}
            placeholder="Enter Bet Amount"
            onChangeText={text => setBetamount(text)}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
           <View><Text style={styles.betname}>BMS</Text></View>
           <View><Text style={styles.betname}>Lamborgini</Text></View>
           <View><Text style={styles.betname}>Nissan</Text></View>
        </View>
    </View>

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
                          outputRange: [degreestart, degreeend],
                        }
                      )
                  }
                ],
            }}
              source={roulette}
          />

    </View>

      <View>
        <Button title="Spin me" color="green" onPress={()=>{startRoulette()}} />
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
    color: 'red'
  },
  input: {

    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ddd'

  },
  betname:{
    color: 'green',
    fontWeight: 'bold'
  }
});

export default HomeScreen;
