import React, { useState} from 'react';
import {
    Button,
    Text,
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

function LoginForm() {

    //Instantiering af statevariabler, der skal benyttes i LoginForm
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)

    // Vi definere HandleSumbit som en en asynkron funktion, hvor vi benytter os af en defineret metode fra Firebase
    // SignInWithEmailAndPassword er en metode, som der er blevet hentet fra Firebase Dokumentation og Øvelsesvejledning. 
    // Vi indkluderer catch error, således vi kan finde ud af hvilken fejl der er tale om således der opstår en fejl. 
    const handleSubmit = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            });

        } catch (error){
            setErrorMessage(error.message)
        }
    }

    //Login knappen, som henter funktionen der kalder Firebase SignIn Metode 
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Login" />;
    };

 // Får elementerne frem på appen, samt knyttet Textinput til datavariablerne der er blevet kodet for oven.
 // Man kan sige man ligesom her får forbundet front-end med back-end delen som vi har kodet i starten af koden i denne fil.
    return (
        <View>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
                style={styles.inputField}
            />
            {renderButton()}
        </View>
    );
}

//Lokal styling til brug i LoginFrom
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

//Eksport af Loginform, således denne kan importeres og benyttes i andre komponenter
export default LoginForm