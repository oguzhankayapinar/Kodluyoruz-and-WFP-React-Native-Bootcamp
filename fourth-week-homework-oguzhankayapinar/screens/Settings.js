import React from 'react'
import {Text, View} from 'react-native'
import firebase from 'firebase/compat/app';
import { Avatar, Button, Subheading, Title } from 'react-native-paper';


const Settings = ()=> {



    return (
      <View style={{alignItems:"center", marginTop:16}}>
        <Avatar.Text label="KA"  />
        <Title> Kullanıcı Adı </Title>
        <Subheading> oguzhan@kayapinar.com </Subheading>
        <Button onPress={()=>firebase.auth().signOut()} >Çıkış Yap</Button>
      </View>
    )
}

export default Settings;