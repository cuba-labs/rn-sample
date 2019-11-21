import React, {Component} from 'react';
import {injectMainStore, MainStoreInjected} from "@cuba-platform/react-core";
import {observer} from "mobx-react";
import Login from "./Login";
import {Button, View} from "react-native";

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
        <Button title={'Log out'} onPress={this.logout}/>
      </View>
    );
  }

  logout = () => {
    this.props.mainStore.logout();
  }
}