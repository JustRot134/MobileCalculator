import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View} from 'react-native';

export default function ResultWindow() {
  return (
    <View style={styles.main}>
        <TextInput style={styles.textS} placeholder='...'/>
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
    textAlign: 'center',
  },
});
