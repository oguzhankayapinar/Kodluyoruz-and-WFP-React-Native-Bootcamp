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
import {Ionicons} from '@expo/vector-icons';
import { Provider } from 'react-native-paper';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyAfTOQ9hk5sK9MURRu4a6wjqXgwdxITUOE",
  authDomain: "chatapp-99c6f.firebaseapp.com",
  projectId: "chatapp-99c6f",
  storageBucket: "chatapp-99c6f.appspot.com",
  messagingSenderId: "547681626810",
  appId: "1:547681626810:web:bfd33478e1ea24680ff083"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);



const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator ();



const TabsNavigator = ()=> {
  const navigation = useNavigation ()
  useEffect (()=> {
    firebase.auth().onAuthStateChanged ( user => {
      if(!user) {
        navigation.navigate ('SignUp')
      }
    })
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
