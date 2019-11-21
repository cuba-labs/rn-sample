import React, {Component} from 'react';
import {injectMainStore, MainStoreInjected} from "@cuba-platform/react-core";
import {observer} from "mobx-react";
import {Login} from "./Login";
import {Button, View} from "react-native";
import {PetBrowse} from "./PetBrowse";

@injectMainStore
@observer
export class Root extends Component<MainStoreInjected> {

  render() {

    const {authenticated} = this.props.mainStore;

    if (!authenticated) {
      return <Login onLoginSubmit={(l, p) => this.props.mainStore.login(l, p)}/>
    }

    return (
      <View>
        <PetBrowse/>
        <Button title={'Log out'} onPress={this.logout}/>
      </View>
    );
  }

  logout = () => {
    this.props.mainStore.logout();
  }
}