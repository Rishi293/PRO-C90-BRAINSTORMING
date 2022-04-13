import firebase from 'firebase'
import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Button,TextInput,Image} from 'react-native';
import Constants from 'expo-constants';
import db from '../config'


export default class Loginscreen extends React.Component {
  constructor(){
    super()
    this.state={
      email:"",
      password:""



    }
  }

  render(){
  return (
    <View style={styles.container}> 
     <Text style={{fontSize:40,color:'blackwhite',backgroundColor:'red',margin:30}}>
     <b>Quizoo</b>
     </Text>
      <TouchableOpacity
      
      />
                  <View style={{margin:50}}>
                  <TextInput
                  style={styles.mybox}

                  placeholder="plz enter email"
                  onChangeText={(text)=>{
                  this.setState({
                    email:text

                  })
                  }}
                  value={this.state.email}
                  />
                    <TextInput
                  style={styles.mybox}
                  secureTextEntry={true}
                  placeholder="plz enter password"
                  onChangeText={(text)=>{
                  this.setState({
                    password:text


                  })
                  }}
                  value={this.state.password}
                  />
                  </View>
<View>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Questionscreen')}}>
<Text>
<Image  source={{uri:"https://previews.123rf.com/images/sarahdesign/sarahdesign1505/sarahdesign150504019/40150101-login-button.jpg "}}
          style={{width:50,height:50}} />
          
</Text>
<image  source={{uri:"https://pin.it/5OzVSf2"}} 
                                           />
</TouchableOpacity>


</View>

     </View>
     
  );
}
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#fff',  }, 
inputBox: { width: '85%', margin: 10, padding: 15, fontSize: 16, borderColor: '#d3d3d3', borderBottomWidth: 1, textAlign: 'center' }, 
button: { marginTop: 30, marginBottom: 20, paddingVertical: 5, alignItems: 'center', backgroundColor: '#F6820D', borderColor: '#F6820D', borderWidth: 1, borderRadius: 5, width: 200 }, 
buttonText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
mybox: {

width: 200, 
height: 20,
borderBottomWidth:3


}


 })