import React from 'react'
import {Text, View} from 'react-native'
import { Avatar, Title, Subheading, Button } from 'react-native-paper'

const Settings = ()=> {
    return (
      <View style={{alignItems:"center", marginTop:16}}>
        <Avatar.Text label="KA"  />
        <Title> Kullanıcı Adı </Title>
        <Subheading> oguzhan@kayapinar.com </Subheading>
        <Button>Çıkış Yap</Button>
      </View>
    )
}

export default Settings;