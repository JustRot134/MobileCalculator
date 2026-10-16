import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <Text>Мобильный калькулятор</Text>
      <View style={styles.ButtonBackground}>
        <Button style={styles.ButtonStyle} title='PressOnMe' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1edc4',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  ButtonBackground: {
    flex: 1,
    backgroundColor: '#bdba98',
    justifyContent: 'center',
  },
  ButtonStyle: {
    flex: 1,
    color: '#afad90',
  },
});
