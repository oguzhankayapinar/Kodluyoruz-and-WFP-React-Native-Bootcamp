import React, {useState} from 'react'
import { Text,View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

const SignUp = ()=> {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');





    return (
    <View style={{margin:10}}> 
       <TextInput 
       label="Kullanıcı Adı"  
       value={name} 
       onChangeText={(text)=>setName(text)}
       tyle={{marginTop:10}}/>
       <TextInput 
       label="Email" 
       value={email} 
       onChangeText={(text)=>setEmail(text)}
       style={{marginTop:10}}
       />
       <TextInput 
       label="Şifre" 
       value={password} 
       onChangeText={(text)=>setPassword(text)}
       style={{marginTop:10}}/>
       <View 
       style={{
        flexDirection:"row", 
        justifyContent:"space-between",
        marginTop:16
        }}> 
            <Button mode="contained">GİRİŞ YAP</Button>
            <Button mode="contained" >ÜYE OL</Button>
        </View>
    </View>
    )
};

export default SignUp;