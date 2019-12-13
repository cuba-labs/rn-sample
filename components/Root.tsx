import React, {Component} from 'react';
import {injectMainStore, MainStoreInjected} from "@cuba-platform/react-core";
import {observer} from "mobx-react";
import {Login} from "./Login";
import {StyleSheet, View} from "react-native";
import {PetBrowse} from "./PetBrowse";
import {PrimaryButton} from './PrimaryButton';

@injectMainStore
@observer
export class Root extends Component<MainStoreInjected> {

  render() {

    const {authenticated} = this.props.mainStore;

    if (!authenticated) {
      return <Login onLoginSubmit={(l, p) => this.props.mainStore.login(l, p)}/>
    }

    return (
      <View style={styles.container}>
        <PetBrowse/>
        <PrimaryButton onPress={this.logout}>Log out</PrimaryButton>
      </View>
    );
  }

  logout = () => {
    this.props.mainStore.logout();
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  }
});
