import React from 'react';
import {StyleSheet} from 'react-native';
import {initializeApp} from "@cuba-platform/rest";
import {registerBase64} from "./util/base64";
import {CubaAppProvider} from "@cuba-platform/react-core";
import {Root} from "./components/Root";
import {light as lightTheme, mapping} from '@eva-design/eva';
import {ApplicationProvider} from "react-native-ui-kitten";

registerBase64();

export const cubaREST = initializeApp({
  name: 'petclinic',
  apiUrl: 'https://petcl.demo.haulmont.com/petclinic/rest/', // TODO you will need to provide your machine's IP to make it work in simulator
  storage: window.localStorage // TODO you will need to provide persistent storage for mobile device runtime
});

export default function App() {
  return (
    <CubaAppProvider cubaREST={cubaREST}>
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Root/>
      </ApplicationProvider>
    </CubaAppProvider>
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
