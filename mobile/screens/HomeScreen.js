import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { token } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mini GCash!</Text>
      <Text style={styles.token}>Token: {token}</Text>
      <Button title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  token: { marginVertical: 20, color: '#333', fontSize: 14, textAlign: 'center' },
});
