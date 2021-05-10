import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import Loader from './Loader';

const PendaftaranSiswa = ({navigation, url, token}) => {
  const [newSiswa, setNewSiswa] = useState({
    nis: '',
    nama: '',
    password: 'siswa1234',
    kelas: '',
    tempatLahir: '',
    tanggalLahir: '',
    uid: '',
    role: 3,
  });
  const [rfid, setRfid] = useState({
    uid: '',
    status: false,
  });
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetch(`${url}/api/kartu`, {
        method: 'GET',
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error('Failed!');
          }
        })
        .then((commits) => {
          setLoading(false);
          console.log(commits);
          setRfid({...commits.data[0]});
        })
        .catch((err) => {
          setLoading(false);
          return Alert.alert('Fail', err);
        });
    }, [token, url, setRfid, setLoading]),
  );

  const createSiswa = () => {
    setLoading(true);
    fetch(`${url}/api/user/register`, {
      method: 'POST',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nis: +newSiswa.nis,
        nama: newSiswa.nama,
        password: newSiswa.password,
        kelas: newSiswa.kelas,
        ttl: `${newSiswa.tempatLahir}, ${newSiswa.tanggalLahir}`,
        uid: rfid.uid,
      }),
    }).then((res) => {
      if (res.ok) {
        fetch(`${url}/api/kartu`, {
          method: 'PUT',
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: true,
          }),
        });
        Alert.alert('Daftar success');
      }
    });
    setNewSiswa({
      nis: '',
      nama: '',
      password: 'siswa1234',
      kelas: '',
      tempatLahir: '',
      tanggalLahir: '',
      uid: '',
      role: 3,
    });
    setRfid({
      uid: '',
      status: true,
    });
    setLoading(false);
  };

  return (
    <ScrollView>
      <Loader loading={loading} />
      <View style={styles.container}>
        <Text style={styles.label}>NIS</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="NIS"
            onChangeText={(text) => setNewSiswa({...newSiswa, nis: text})}
            value={newSiswa.nis}
          />
        </View>
        <Text style={styles.label}>Nama</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Nama"
            onChangeText={(text) => setNewSiswa({...newSiswa, nama: text})}
            value={newSiswa.nama}
          />
        </View>
        <Text style={styles.label}>Kelas</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Kelas"
            onChangeText={(text) => setNewSiswa({...newSiswa, kelas: text})}
            value={newSiswa.kelas}
          />
        </View>
        <Text style={styles.label}>Tempat Lahir</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Tempat Lahir"
            onChangeText={(text) =>
              setNewSiswa({...newSiswa, tempatLahir: text})
            }
            value={newSiswa.tempatLahir}
          />
        </View>
        <Text style={styles.label}>Tanggal Lahir</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Tanggal Lahir"
            onChangeText={(text) =>
              setNewSiswa({...newSiswa, tanggalLahir: text})
            }
            value={newSiswa.tanggalLahir}
          />
        </View>
        <Text style={styles.label}>RFID Card</Text>
        <View style={styles.inputRfid}>
          <TextInput
            placeholder="RFID Card"
            value={!rfid.status ? rfid.uid : 'Silahkan Tap Kartu dulu'}
            editable={false}
          />
          {/* {!rfid.status ? rfid.uid : 'Silahkan Tap Kartu dulu'} */}
        </View>
        <View style={styles.btn}>
          <Button
            title="DAFTAR"
            onPress={() => createSiswa()}
            color={'green'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 22,
    borderColor: 'white',
    borderBottomColor: 'darkblue',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'darkslateblue',
    color: 'whitesmoke',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 20,
  },
  inputRfid: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 20,
  },
  btn: {
    marginVertical: 5,
  },
});

export default PendaftaranSiswa;
