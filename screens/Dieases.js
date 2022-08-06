import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Divider, NativeBaseProvider } from 'native-base';

const Dieases = () => {
  return (
<NativeBaseProvider>
    <View>
    <View style={styles.Container}>
      <Text style={styles.text}>Diease</Text>
   </View>
   <View style={styles.flex}>
     <Text style={styles.title}>Title</Text>
   </View>
   <View style={styles.description}>
   <Text style={styles.title}>Description</Text>  
   <Divider my={2} bg="blue.500" />
  
    </View>

    <View style={styles.flex}>
     <Text style={styles.title}>Title</Text>
   </View>
   <View style={styles.description}>
   <Text style={styles.title}>Description</Text>  
   <Divider my={2} bg="blue.500" /> 

    </View>
    <View style={styles.flex}>
     <Text style={styles.title}>Title</Text>
   </View>
   <View style={styles.description}>
   <Text style={styles.title}>Description</Text>  
   <Divider my={2} bg="blue.500" /> 

    </View>
    <View style={styles.flex}>
     <Text style={styles.title}>Title</Text>
   </View>
   <View style={styles.description}>
   <Text style={styles.title}>Description</Text>   
   <Divider my={2} bg="blue.500" />

   </View>
    </View>
    </NativeBaseProvider>
  
  )
}

export default Dieases;
const styles=StyleSheet.create({
  
  Container:{
    textAlign:'center',
    padding:10,
    backgroundColor:'#e0e0e0',
    border:'1px solid #bdbdbd',
    borderRadius:10

  },
  text:{
    fontSize:18,

  },
  flex:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    padding:20
  },
  title:{
    fontSize:20,
  },
  description:{
    padding:20

  }
  
});
