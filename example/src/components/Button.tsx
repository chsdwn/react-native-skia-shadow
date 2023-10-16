import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { SkiaShadow } from 'react-native-skia-shadow';

import { ProfilePicture } from './ProfilePicture';

interface IProps extends PressableProps {
  title: string;
}
export const Button = ({ title, ...rest }: IProps) => {
  return (
    <Pressable style={styles.button} {...rest}>
      <SkiaShadow color="#333" blur={10} dx={0} dy={0} borderRadius={9999}>
        <ProfilePicture size={36} />
      </SkiaShadow>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 32,
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 16,
  },
});
