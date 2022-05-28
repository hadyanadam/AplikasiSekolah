import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Header from './Header';
import Loader from './Loader';
import Icons from 'react-native-vector-icons/Ionicons';
import {formatDate} from '../utils/textUtils';

const Absen = ({user, url}) => {
  const [absen, setAbsen] = useState({
    absen1: false,
    absen2: false,
    updatedAt: '',
  });
  const token = user.token;

  useFocusEffect(
    useCallback(() => {
      fetch(`${url}/api/absen?user_id=${user.id}`, {
        headers: {
          'auth-token': token,
        },
      })
        .then((response) => response.json())
        .then((commits) => {
          setAbsen(commits.data[0]);
          console.log(commits.data);
        });
    }, [user.id, token, url, setAbsen]),
  );

  return (
    <>
      {absen && absen.updatedAt === '' ? (
        <Loader loading={true} />
      ) : (
        <Loader loading={false} />
      )}
      <Header title={'Absen'} />

      <View style={styles.container}>
        <ScrollView>
      <Text style={styles.absenLabel}>Absen Siswa</Text>
        <View style={styles.absenColumn}>
          <View style={styles.absenRow}>
            <Text style={styles.absenHead}>Absen 1</Text>
            <View style={styles.absenContent}>
              {absen && absen.absen1 ? (
                <Icons name="checkmark-circle" size={100} color="green" />
              ) : (
                <Icons name="close-circle" size={100} color="red" />
              )}
            </View>
            <View style={styles.absenFoot}>
              {absen && absen.absen1 ? (
                <Text>Absen pada: {`${formatDate(absen.waktu_absen1)}`}</Text>
              ) : (
                <Text>Silahkan melakukan absen</Text>
              )}
            </View>
          </View>
          <View style={styles.absenRow}>
            <Text style={styles.absenHead}>Absen 2</Text>
            <View style={styles.absenContent}>
              {absen && absen.absen2 ? (
                <Icons name="checkmark-circle" size={100} color="green" />
              ) : (
                <Icons name="close-circle" size={100} color="red" />
              )}
            </View>
            <View style={styles.absenFoot}>
              {absen && absen.absen2 ? (
                <Text>Absen pada: {`${formatDate(absen.waktu_absen2)}`}</Text>
              ) : (
                <Text>Silahkan melakukan absen</Text>
              )}
            </View>
          </View>
        </View>
      <Text style={styles.absenLabel}>Absen Pelajaran</Text>
      <View style={styles.absenColumn}>
      <View style={styles.absenRow}>
        <Text style={styles.absenHead}>Absen Bahasa Indonesia</Text>
        <View style={styles.absenContent}>
          {absen && absen.bahasa_indonesia ? (
            <Icons name="checkmark-circle" size={100} color="green" />
          ) : (
            <Icons name="close-circle" size={100} color="red" />
          )}
        </View>
        <View style={styles.absenFoot}>
          {absen && absen.bahasa_indonesia ? (
            <Text>Absen pada: {`${formatDate(absen.waktu_b_indo)}`}</Text>
          ) : (
            <Text>Silahkan melakukan absen</Text>
          )}
        </View>
      </View>
      <View style={styles.absenRow}>
        <Text style={styles.absenHead}>Absen PKN</Text>
        <View style={styles.absenContent}>
          {absen && absen.pkn ? (
            <Icons name="checkmark-circle" size={100} color="green" />
          ) : (
            <Icons name="close-circle" size={100} color="red" />
          )}
        </View>
        <View style={styles.absenFoot}>
          {absen && absen.pkn ? (
            <Text>Absen pada: {`${formatDate(absen.waktu_pkn)}`}</Text>
          ) : (
            <Text>Silahkan melakukan absen</Text>
          )}
        </View>
      </View>
      </View>
      <View style={styles.absenColumn}>
      <View style={styles.absenRow}>
        <Text style={styles.absenHead}>Absen Bahasa Inggris</Text>
        <View style={styles.absenContent}>
          {absen && absen.bahasa_inggris ? (
            <Icons name="checkmark-circle" size={100} color="green" />
          ) : (
            <Icons name="close-circle" size={100} color="red" />
          )}
        </View>
        <View style={styles.absenFoot}>
          {absen && absen.bahasa_inggris ? (
            <Text>Absen pada: {`${formatDate(absen.waktu_b_inggris)}`}</Text>
          ) : (
            <Text>Silahkan melakukan absen</Text>
          )}
        </View>
      </View>
      <View style={styles.absenRow}>
        <Text style={styles.absenHead}>Absen Matematika</Text>
        <View style={styles.absenContent}>
          {absen && absen.matematika ? (
            <Icons name="checkmark-circle" size={100} color="green" />
          ) : (
            <Icons name="close-circle" size={100} color="red" />
          )}
        </View>
        <View style={styles.absenFoot}>
          {absen && absen.matematika ? (
            <Text>Absen pada: {`${formatDate(absen.waktu_matematika)}`}</Text>
          ) : (
            <Text>Silahkan melakukan absen</Text>
          )}
        </View>
      </View>
      </View>
      <View style={styles.absenColumn}>
      <View style={styles.absenRow}>
        <Text style={styles.absenHead}>Absen IPA</Text>
        <View style={styles.absenContent}>
          {absen && absen.ipa ? (
            <Icons name="checkmark-circle" size={100} color="green" />
          ) : (
            <Icons name="close-circle" size={100} color="red" />
          )}
        </View>
        <View style={styles.absenFoot}>
          {absen && absen.ipa ? (
            <Text>Absen pada: {`${formatDate(absen.waktu_ipa)}`}</Text>
          ) : (
            <Text>Silahkan melakukan absen</Text>
          )}
        </View>
      </View>
      <View style={styles.absenRow}>
        <Text style={styles.absenHead}>Absen IPS</Text>
        <View style={styles.absenContent}>
          {absen && absen.ips ? (
            <Icons name="checkmark-circle" size={100} color="green" />
          ) : (
            <Icons name="close-circle" size={100} color="red" />
          )}
        </View>
        <View style={styles.absenFoot}>
          {absen && absen.ips ? (
            <Text>Absen pada: {`${formatDate(absen.waktu_ips)}`}</Text>
          ) : (
            <Text>Silahkan melakukan absen</Text>
          )}
        </View>
      </View>
      </View>
      </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  absenColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  absenRow: {
    marginHorizontal: 5,
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center',
    borderWidth: 1,
  },
  absenHead: {
    width: '100%',
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'green',
  },
  absenLabel: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
  },
  absenContent: {
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  absenFoot: {
    width: '100%',
    backgroundColor: 'lightgrey',
    borderTopColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
  },
});

export default Absen;
