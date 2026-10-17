import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.textS}>Калькулятор</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: '4%',
    alignSelf: 'center',
    width: 350,
    height: 70,
    backgroundColor: '#c8ba8e',
    borderRadius: 10,
  },
  textS: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
