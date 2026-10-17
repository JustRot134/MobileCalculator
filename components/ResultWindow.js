import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function ResultWindow({dispalyValue}) {

  return (
    <View style={styles.main}>
        <Text style={styles.textS}>{dispalyValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: '5%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    width: 350,
    height: 260,
    borderRadius: 10,
    backgroundColor: '#95907b',
  },
  textS: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  },
});
