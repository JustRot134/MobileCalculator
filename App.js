import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import ButtonGrid from './components/ButtonGrid';
import ResultWindow from './components/ResultWindow';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const addNumber = (num) => {
    if (displayValue == '0') {
      setDisplayValue(num);
    } else {
          setDisplayValue(displayValue + num);
    }
  };

  const clearNumber = () => {
    setDisplayValue('0');
  };

  return (
    <View style={styles.container}>
      <Header />
      <ResultWindow dispalyValue={displayValue}/>
      <ButtonGrid addNumber={addNumber} clearNumber={clearNumber} />
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
