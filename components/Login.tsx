import React, {Component} from 'react';
import {TextInput, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {colors} from '../styles/palette';
import {control} from '../styles/mixins';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    minHeight: 220,
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    marginTop: 32,
  },
  title: {
    color: colors.textInverted,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.textInverted,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
  },
  input: {
    ...control,
    borderColor: colors.borders,
    borderWidth: 1,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  forgotPassword: {
    ...control,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.primary,
  },
  loginBtn: {
    ...control,
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  loginBtnText: {
    color: colors.textInverted,
    fontSize: 18,
  }
});

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
        <View style={styles.header}>
          <Text style={styles.title}>Pet Clinic</Text>
          <Text style={styles.subTitle}>Sign in to your account</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.input}
                     value={this.login}
                     placeholder='Login'
                     placeholderTextColor={colors.placeholders}
                     onChangeText={this.onLoginChange}
                     onSubmitEditing={this.onLoginSubmit}
          />
          <TextInput style={styles.input}
                     value={this.password}
                     placeholder='Password'
                     placeholderTextColor={colors.placeholders}
                     secureTextEntry={true}
                     onChangeText={this.onPasswordChange}
                     onSubmitEditing={this.onLoginSubmit}
          />
          <TouchableOpacity style={styles.loginBtn} onPress={this.onLoginSubmit}>
            <Text style={styles.loginBtnText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
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
