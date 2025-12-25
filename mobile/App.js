import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const login = async () => {
    try{
      const res = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email,password})
      });
      const j = await res.json();
      setToken(j.token || JSON.stringify(j));
    }catch(e){console.warn(e)}
  }

  return (
    <View style={{padding:30}}>
      <Text>Mini GCash Mobile (Starter)</Text>
      <TextInput placeholder="email" value={email} onChangeText={setEmail} style={{borderWidth:1,marginVertical:8,padding:8}} />
      <TextInput placeholder="password" value={password} onChangeText={setPassword} secureTextEntry style={{borderWidth:1,marginVertical:8,padding:8}} />
      <Button title="Login" onPress={login} />
      <Text style={{marginTop:20}}>Token: {token}</Text>
    </View>
  )
}
