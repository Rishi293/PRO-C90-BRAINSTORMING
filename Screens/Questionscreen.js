import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
const apiurl='https://opentdb.com/api.php?amount=20&category=15&difficulty=medium&type=multiple'

export default class Questionscreen extends React.Component {
  async fetchQuestion(){
return fetch(apiurl)
.then((response)=>{
response.json()
.then((responsejson)=>{
  console.log(responsejson)
})

//.  i have comment it console.log()
})
.catch(error=>{
  console.log.error
})
  }
  componentDidMount(){
this.fetchQuestion()
  }
  render(){
    return (
      <ScrollView style={styles.container}>

    <View style={styles.questioncontainer}>
  
  <Text style = {styles.mytext}>
Questions

  </Text>  
<TouchableOpacity style={styles.button}>
<Text style={styles.answer}>
ans1
</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
<Text style={styles.answer}>
ans2
</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
<Text style={styles.answer}>
ans3
</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
<Text style={styles.answer}>
ans4
</Text>
</TouchableOpacity>

    </View>
</ScrollView>
  );
}
}
const styles = StyleSheet.create({
mytext:{
  fontSize:20
},
questioncontainer:{
  marginHorizontal:30,
  marginVertical:30
},
answer:{},
button:{},
container:{flex:1,
backgroundColor:'aqua'
}

})