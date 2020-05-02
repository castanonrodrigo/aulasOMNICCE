import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [state, setState] = useState("nosso primeiro state!");
  console.log("nosso state:", state);
  let count= 0; 
  function somador(){
    count++;
    console.log("valor do count", count);
  }
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="aumentar" onPress={somador}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//propriedades === props
//estados === states