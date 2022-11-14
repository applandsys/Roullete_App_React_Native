import React, {useContext, useState} from 'react';
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

const Forgetpassword = ({navigation}) => {
  const [email, setEmail] = useState(null);


  const {isLoading, register} = useContext(AuthContext);


  const onPress = () => {
    register(name, email, password);
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
       
      <View style={{  marginTop: 30}}>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Resetpassword')}>
              <Image style={{marginLeft: 10, width: 50, height: 50}}
              source={require('../../assets/icons/left_arrow.png')}/>
            </TouchableOpacity>
          </View>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
        <View><Text style={styles.title_text}>Forget Password</Text></View>
        <View style={{padding: 10}}><Text style={{color: '#fff', textAlign: 'center'}}>We sent 5 digit code to your email address, please check & enter it here</Text></View>
      </View>

  
    <View style={styles.container}>
      <Spinner visible={isLoading} />

      <View style={styles.wrapper}>
      
        <View>
          
          <View>
              <View><Text>Your Email</Text></View>
              <View>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder=""
                    onChangeText={text => setEmail(text)}
                  />
              </View>
          </View>


        </View>

        <View style={styles.gutter_row}>
          <Buttonsubmit title="Continue" onPress={onPress}/>
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
    marginTop: 10
  },
  wrapper: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'column',
    paddingVertical: 50,
    paddingHorizontal: 25,
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
    textAlign: 'center'
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

export default Forgetpassword;
