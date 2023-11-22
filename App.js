import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, Coder!</Text>
      <Text>Mi primer proyecto en desarrollo de aplicaciones</Text>
      <Text>Mauricio Picca</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 40,
    marginBottom: 30,
  },
})
