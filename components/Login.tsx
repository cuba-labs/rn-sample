import React, {Component} from 'react';
import {View, ViewProps} from "react-native";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {Button, Text, Input, ThemedComponentProps, ThemeType, withStyles} from "react-native-ui-kitten";
import {ScrollableAvoidKeyboard} from "./common/scrollableAvoidKeyboard.component";

type Props = ThemedComponentProps & ViewProps & {
  onLoginSubmit: (login: string, password: string) => any
}

@observer
class LoginComponent extends Component<Props> {

  @observable login = '';
  @observable password = '';

  render() {

    const {style, themedStyle, ...restProps} = this.props;

    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <View style={themedStyle.headerContainer}>
          <Text
            style={themedStyle.helloLabel}
            category='h1'>
            Hello
          </Text>
          <Text
            style={themedStyle.signInLabel}
            category='s1'>
            Sign in to your account
          </Text>
        </View>
        <View
          style={[{}, style]}
          {...restProps}>
          <View style={themedStyle.formContainer}>
            <Input
              autoCapitalize='none'
              value={this.login}
              placeholder={'User Name'}
              style={[themedStyle.container, style]}
              onChangeText={this.onLoginChange}
            />
            <Input
              autoCapitalize='none'
              value={this.password}
              placeholder={'Password'}
              style={[themedStyle.container, style]}
              onChangeText={this.onPasswordChange}
            />
            <View style={themedStyle.forgotPasswordContainer}>
              <Button
                style={themedStyle.forgotPasswordButton}
                textStyle={themedStyle.forgotPasswordText}
                appearance='ghost'
                activeOpacity={0.75}
                onPress={() => {
                }}>
                Forgot your password?
              </Button>
            </View>
          </View>
        </View>
        <Button
          style={themedStyle.signInButton}
          size='giant'
          onPress={this.onLoginSubmit}>
          SIGN IN
        </Button>
      </ScrollableAvoidKeyboard>
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

export const Login = withStyles(LoginComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: theme['color-primary-default'],
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  helloLabel: {
    color: 'white',
  },
  signInLabel: {
    marginTop: 16,
    color: 'white',
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: theme['text-hint-color'],
  },
}));
