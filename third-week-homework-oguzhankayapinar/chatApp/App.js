import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatList from './screens/ChatList';
import Chat from './screens/Chat';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Settings from './screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'
import { Provider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator ();


const TabsNavigator = ()=> {
  const navigation = useNavigation ()
  useEffect (()=> {
    const isLoggedIn =false
    if(!isLoggedIn) {
      navigation.navigate ('SignUp')

    }
  }, [])



  return ( 
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      return <Ionicons name ={route.name=== 'ChatList' ? "chatbubble-ellipses" : "settings"} 
      color={color} 
      size={size} />
    },
  })}
  >
    <Tabs.Screen name="ChatList" component={ChatList}/>
    <Tabs.Screen name="Settings" component={Settings}/>
  </Tabs.Navigator>
  )
};

const App = () => {
  return (
   <NavigationContainer>
    <Provider> 
    <Stack.Navigator>
      <Stack.Screen 
      name="Main" 
      component={TabsNavigator} 
      options={{headerShown: false }}/>
      <Stack.Screen name="Chat" component={Chat}/>
      <Stack.Screen 
        name="SignUp" 
        component={SignUp}
        options={{presentation:"fullScreenModal"}}
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignIn}
        options={{presentation:"fullScreenModal"}}

      />
    </Stack.Navigator>
    </Provider>
   </NavigationContainer>
  );
};

export default App;
