//React
import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
//Firebase
import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function SignupFunc() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)

/*  Laver en knap som opretter en bruger, Knappen kalder på handlesubmit funktionen 
    som er vores aynkronske funktion der laver en bruger */

    const renderButton = () => {
    return <Button title="test" onPress={() => handleSubmit() } />
    }; 

    // Asynkronus funktion dvs. vi sætter den til side indtil den kan køre agtigt (warm pancakes eksemplet fra YT tutorial)
    const handleSubmit = async() => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password).then((data)=>{
            });
        } catch (error){
            setErrorMessage(error.message)
        }

    }

    // Får elementerne frem på appen, samt knyttet Textinput til datavariablerne der er blevet kodet for oven.
     // Man kan sige man ligesom her får forbundet front-end med back-end delen som vi har kodet i starten af koden i denne fil.
    return (
    <View>
    <Text> SIGN UP </Text>
    <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
      {renderButton()}
      </View>
    )
}


const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 40,
    },
});

export default SignupFunc;