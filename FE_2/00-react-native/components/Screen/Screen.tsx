import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export default function Screen({children}: PropsWithChildren) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
