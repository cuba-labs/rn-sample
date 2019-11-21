import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";
import {observer} from "mobx-react";
import {observable} from "mobx";

type Props = {
  onLoginSubmit: (login: string, password: string) => any
}

@observer
export class Login extends Component<Props> {

  @observable login = '';
  @observable password = '';

  render() {
    return (
      <View>
        <TextInput value={this.login} onChangeText={this.onLoginChange}/>
        <TextInput value={this.password} onChangeText={this.onPasswordChange}/>
        <Button title={'Log In'} onPress={this.onLoginSubmit}/>
      </View>
    );
  }

  onLoginChange = (login: string) => {
    this.login = login;
  };

  onPasswordChange = (password: string) => {
    this.password = password;
  };

  onLoginSubmit = () => {
    this.props.onLoginSubmit(this.login, this.password);
  };
}