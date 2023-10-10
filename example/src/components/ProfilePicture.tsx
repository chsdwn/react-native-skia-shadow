import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type Props = {
  size: number;
};
export const ProfilePicture = ({ size }: Props) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/13810855' }}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 9999,
  },
  image: {
    aspectRatio: 1,
  },
});
