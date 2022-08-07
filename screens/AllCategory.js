import { View, Text,StyleSheet } from 'react-native'
import {  NativeBaseProvider } from 'native-base';

const AllCategory = () => {
  return (
    
<NativeBaseProvider>
    <View>
    <View style={styles.Container}>hvhvhv
      <Text style={styles.text}>AllCategory</Text>
   </View>
   </View>
    </NativeBaseProvider>
  
  )
}

export default AllCategory;
const styles=StyleSheet.create({
  
  Container:{
    textAlign:'center',
    padding:10,
    backgroundColor:'#e0e0e0',
    border:'1px solid #bdbdbd',
    borderRadius:15

  },
  text:{
    fontSize:18,

  },
  }
)
