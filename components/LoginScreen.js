import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Loader from './Loader';

const Home = ({navigation}) => {
  // const url = 'http://107.175.247.242:2000';
  const url = 'https://api-siswa.herokuapp.com';
  const [nis, setNis] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    setLoading(true);
    const res = await fetch(`${url}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nis: nis,
        password: password,
      }),
    });
    setPassword('');
    if (res.ok) {
      const data = await res.json();
      console.log(data.data.token);
      setLoading(false);
      return navigation.navigate('Menu', {user: data.data, serverUrl: url});
    } else {
      setLoading(false);
      return Alert.alert(
        'Login Failed!',
        'Please make sure NIS and Password correct!',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Aplikasi Sekolah</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nomor Induk..."
          placeholderTextColor="#003f5c"
          keyboardType={'numeric'}
          onChangeText={(text) => setNis(parseInt(text))}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          autoCompleteType={'password'}
          textContentType={'password'}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => loginHandler()} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    padding: 20,
    marginBottom: 10,
  },
  titleText: {
    color: 'black',
    fontSize: 30,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'darkgrey',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

export default Home;
