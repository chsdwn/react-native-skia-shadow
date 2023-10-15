import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SkiaShadow } from 'react-native-skia-shadow';

import { Button, Card, ProfilePicture } from '../components';

export const Components = () => {
  return (
    <View style={styles.container}>
      <SkiaShadow blur={5} dx={0} dy={-20} borderRadius={9999} color="blue">
        <SkiaShadow blur={5} dx={-20} dy={10} borderRadius={9999} color="red">
          <SkiaShadow
            blur={5}
            dx={20}
            dy={10}
            borderRadius={9999}
            color="green"
          >
            <ProfilePicture size={64} />
          </SkiaShadow>
        </SkiaShadow>
      </SkiaShadow>

      <SkiaShadow
        blur={3}
        dx={10}
        dy={10}
        borderTopLeftRadius={8}
        borderBottomRightRadius={32}
      >
        <Button title="Skia Shadow" />
      </SkiaShadow>

      <SkiaShadow blur={5} dx={0} dy={1} borderRadius={8}>
        <Card />
      </SkiaShadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
