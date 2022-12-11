import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const navigation = useNavigation()

    const SignIn = async ()=> {
        setIsLoading(true);
        try {
          await  firebase.auth().signInWithEmailAndPassword(email,password)
            navigation.popToTop();
        }catch (e){
            setIsLoading(false)
            setError(e.message);
        }
    };
    
    return (
        <View style={{ margin: 10 }}>
            
            <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{ marginTop: 10 }}
                keyboardType="email-address"

            />
            <TextInput
                label="Şifre"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={{ marginTop: 10 }} 
                secureTextEntry
                />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 16
                }}>
                <Button mode="contained" onPress={()=> navigation.navigate('SignUp')} >ÜYE OL</Button>
                <Button mode="contained" loading={isLoading} onPress={()=> SignIn()}>GİRİŞ YAP</Button>
                
            </View>
        </View>
    )
};

export default SignIn;