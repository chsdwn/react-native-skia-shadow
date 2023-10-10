import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SkiaShadow } from 'react-native-skia-shadow';

import { Card } from '../components';

const data = Array(10).fill(0);

const Seperator = () => <View style={styles.seperator} />;
const ShadowedCard = () => (
  <SkiaShadow dx={0} dy={0} blur={3} borderRadius={8}>
    <Card />
  </SkiaShadow>
);

export const List = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={(_, index) => `card-${index}`}
        renderItem={ShadowedCard}
        ItemSeparatorComponent={Seperator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  flatlistContainer: {
    padding: 12,
  },
  seperator: {
    height: 24,
  },
});
