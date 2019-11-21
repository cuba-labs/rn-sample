import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {initializeApp} from "@cuba-platform/rest";
import {registerBase64} from "./util/base64";

registerBase64();

export const cubaREST = initializeApp({
  name: 'petclinic',
  apiUrl: 'http://192.168.16.120:8080/petclinic/rest/', // TODO you will need to provide your machine's IP to make it work in simulator
  // storage: window.localStorage // TODO you will need to provide persistent storage implementation for REST token
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title={'Login'} onPress={() => {cubaREST.login('admin', 'admin')}}/>
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
