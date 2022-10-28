// React Native & Expo
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

// Afhentning af funktioner
import SignupFunc from './components/signupForm'
import LoginFunc from './components/loginForm'

// Firebase
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

// Personlige Konfigurationen til firebase, som er hentet fra vores projekt oprettet i Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBBQnARtxZ9vt25Z1JO2Vp5Pj-hJLGo3gw",
  authDomain: "selfreflection-4afb0.firebaseapp.com",
  projectId: "selfreflection-4afb0",
  storageBucket: "selfreflection-4afb0.appspot.com",
  messagingSenderId: "489405503234",
  appId: "1:489405503234:web:916315e3124641fe53d41b"
};

/// Denne her funktion sørger for at når den kan se Firebase kører, så køre den ikke igen og igen. 
export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  return (
    <View style={styles.container}>
      <Card style={{padding:20}}>
            <SignupFunc />
            <LoginFunc />
          </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
