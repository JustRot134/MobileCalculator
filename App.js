import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import ButtonGrid from './components/ButtonGrid';
import ResultWindow from './components/ResultWindow';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ResultWindow />
      <ButtonGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1edc4',
    paddingTop: '12%',
  },
});
