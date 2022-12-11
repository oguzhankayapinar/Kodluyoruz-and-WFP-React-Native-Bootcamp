import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const navigation = useNavigation()

    const createAccount = async ()=> {
        setIsLoading(true);
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email,password);
            await response.user.updateProfile({displayName:name});
            navigation.popToTop();
        }catch (e){
            setIsLoading(false)
            setError(e.message);
        }
    };
    return (
        <View style={{ margin: 10 }}>
            <TextInput
                label="Kullanıcı Adı"
                value={name}
                onChangeText={(text) => setName(text)}
                tyle={{ marginTop: 10 }} />
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
                <Button mode="contained" onPress={()=> navigation.navigate('SignIn')}>GİRİŞ YAP</Button>
                <Button mode="contained" onPress={() => createAccount()} loading={isLoading}>ÜYE OL</Button>
            </View>
        </View>
    )
};

export default SignUp;