import { Pressable, StyleSheet, Text, View, } from 'react-native';

export default function ButtonGrid({addNumber, clearNumber}) {
  return (
    <View style={styles.main}>
            <Pressable style={styles.buttonStyle}> 
                <Text style={styles.textS}>⇐</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('7')}>
                <Text style={styles.textS}>7</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('4')}> 
                <Text style={styles.textS}>4</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('1')}> 
                <Text style={styles.textS}>1</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('0')}> 
                <Text style={styles.textS}>0</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle}> 
                <Text style={styles.textS}>CE</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('8')}> 
                <Text style={styles.textS}>8</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('5')}> 
                <Text style={styles.textS}>5</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('2')}> 
                <Text style={styles.textS}>2</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('.')}> 
                <Text style={styles.textS}>.</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={clearNumber}> 
                <Text style={styles.textS}>C</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('9')}>
                <Text style={styles.textS}>9</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('6')}> 
                <Text style={styles.textS}>6</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('3')}> 
                <Text style={styles.textS}>3</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle}> 
                <Text style={styles.textS}>±</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle}> 
                <Text style={styles.textS}>=</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('+')}> 
                <Text style={styles.textS}>+</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('-')}> 
                <Text style={styles.textS}>-</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('*')}> 
                <Text style={styles.textS}>*</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={() => addNumber('/')}> 
                <Text style={styles.textS}>/</Text>
            </Pressable>
            
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: '5%',
    alignSelf: 'center',
    width: 350,
    height: 400,
    backgroundColor: '#c8ba8e',
    borderRadius: 10,
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
  buttonStyle: {
    marginTop: '5%',
    height: 60,
    width: 60,
    backgroundColor: '#887f5f',
    borderRadius: 10,
  },
  textS: {
    marginTop: '20%',
    fontSize: 26,
    textAlign: 'center',
  },
});
