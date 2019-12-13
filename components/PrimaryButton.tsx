import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {control} from '../styles/mixins';
import {colors} from '../styles/palette';

const styles = StyleSheet.create({
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

export type PrimaryButtonProps = {
  onPress: () => void,
};

export const PrimaryButton: FunctionComponent<PrimaryButtonProps> = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text style={styles.loginBtnText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
