import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/13810855' }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          github.com/chsdwn
        </Text>
        <Text style={styles.description}>React Native Skia Shadow</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageContainer: {
    width: '33%',
  },
  image: {
    aspectRatio: 1,
  },
  contentContainer: {
    height: '100%',
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 16,
  },
});
