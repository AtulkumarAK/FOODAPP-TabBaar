import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllCategory from './screens/AllCategory';
import Dieases from './screens/Dieases';
import DieaseYear from './screens/DieaseYear';
import DieaseMonth from './screens/DieaseMonth';
import {Icon} from 'react-native-elements'
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator tabBarOptions={{tabBaractiveTintColor:'red'}}>
      <Tab.Screen name="Home" component={AllCategory} options={{headerShown: false,tabBarIcon:(props) =>(
        <Icon type='feather' name='home' color={props.color}/>
      ),
      }} />
      <Tab.Screen name="Diease" component={Dieases} options={{headerShown:false,tabBarIcon:(props) =>(
        <Icon type='feather' name='bell' color={props.color} />
      ),
      }}/>
      <Tab.Screen name="Month" component={DieaseMonth}options={{headerShown:false ,tabBarIcon:(props) =>(
        <Icon type='feather' name='calendar'color={props.color} />
      ),}}/>
      <Tab.Screen name="Year" component={DieaseYear}options={{headerShown:false,tabBarIcon:(props) =>(
        <Icon type='feathfghfgf' name='calendar'color={props.color} />
      ),}}/>

    </Tab.Navigator>
</NavigationContainer>
);
}

