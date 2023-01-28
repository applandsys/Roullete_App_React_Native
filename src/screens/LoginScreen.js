import React, {useContext, useState, useEffect} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView 
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import Buttonsubmit from '../elements/Buttonsubmit';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);

  const {userInfo,  logout} = useContext(AuthContext);

  useEffect(() => {
    // Update the document title using the browser API
      console.log(userInfo);
  },[]);

  const onPress = () => {
    login(email, password);
  }

  const image = require('../../assets/images/blank_background.png');

  return (
    
    <SafeAreaView style={styles.container}>
    <ImageBackground
    source={image}
    style={{
      backgroundColor: '#fc0',
      width: '100%', // applied to Image
      height: '100%' 
    }}>
    <View style={{flex:1}}>


      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 70, marginBottom: 20}}>
        <View><Text style={styles.title_text}>Sign In</Text></View>
      </View>

      <View style={{  backgroundColor: '#fff', margin: 10, borderRadius: 30}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View style={{paddingLeft: 30,paddingRight: 30, paddingVertical: 10, marginLeft: 10, marginBottom: 8, backgroundColor: '#b62a82', borderRadius: 30}}>
               <Text style={{color: '#fff'}}>Sign In</Text>
            </View>
            <View style={{padding: 10, marginRight: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>



    <View style={styles.container}>
      <Spinner visible={isLoading} />

      <View style={styles.wrapper}>
      
        <View>
            <View>
              <Text style={styles.label_text}>Your email</Text>
            </View>
            <View>
              <TextInput
                style={styles.input} 
                value={email}
                placeholder="Enter email"
                onChangeText={text => setEmail(text)}
              />
            </View>
        </View>
      
    
        <View style={styles.gutter_row}>
          <View>
            <Text style={styles.label_text}> Password </Text>
          </View>
            <View>
              <TextInput
                style={styles.input}
                value={password}
                placeholder="Enter password"
                onChangeText={text => setPassword(text)}
                secureTextEntry
              />
            </View>
        </View>
       
        <View>
          <View style={{marginTop: 20}}>
            <Text style={{ textAlign: 'right' }}> Forget Password ? </Text>
          </View>
        </View>

        <View style={styles.gutter_row}>
          <Buttonsubmit title="Sign In" onPress={onPress}/>
        </View>

        <View style={styles.bottomContainer}>
          <View style={{marginTop: 20}}>
            <Text style={{ textAlign: 'center' }}> Or Sign in with </Text>
          </View>
        </View>


      </View>
    </View>

  </View>

</ImageBackground>
</SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '90%',
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
    flexDirection: 'column',
    padding: 24,
    marginBottom: 10
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
  link: {
    color: 'blue',
  },
  left_arrow:{
    marginLeft: 50,
  },
  title_text:{
    fontSize: 25,
    marginTop: 10,
    color: "#fff",
  },
  label_text: {color: '#000' , fontSize: 15,fontWeight: 'bold'},
  gutter_row:{
    marginTop: 20,
  },
  submit_button:{paddingLeft: 30,paddingRight: 30, paddingVertical: 10, marginLeft: 10, marginBottom: 8, backgroundColor: '#b62a82', borderRadius: 30},
    bottomContainer: {
      flex: 1,
      justifyContent: 'flex-end',
  }
});

export default LoginScreen;
