import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export const Menu = () => {
  const navigation = useNavigation<any>();

  const handleComponentsExamplePress = () => {
    navigation.navigate('Components');
  };

  const handleListExamplePress = () => {
    navigation.navigate('List');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Components Example"
        onPress={handleComponentsExamplePress}
      />
      <View style={styles.seperator} />
      <Button title="List Example" onPress={handleListExamplePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    height: 36,
  },
});
