import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {
  const [state, setState] = useState(0);
  console.log("nosso state:", state);
  console.log("nossa funcao de alterar o state:", setState)
  return (
    <SafeAreaView style={styles.container}>
      <Text>{state}</Text>
      <Button title="aumentar" onPress={()=>setState(state +1)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa7f21',
    alignItems:"center",
    justifyContent: 'center',
  },
});
