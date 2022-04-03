import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Header from './Header';
import Loader from './Loader';
import Icons from 'react-native-vector-icons/Ionicons';
import {formatDate} from '../utils/textUtils';

const Jadwal = ({navigation, user, token, url}) => {
    const guruBindo = {
        title: 'Bahasa Indonesia',
        nama: 'Aulia Safitri S.Pd',
        ttl: 'Bogor, 20 Agustus 1995',
        nis: 120
    }
    const guruBingg = {
        title: 'Bahasa Inggris',
        nama: 'Fajar Dwi S.Pd',
        ttl: 'Bogor, 29 Desember 1991',
        nis: 121
    }
    const guruPkn = {
        title: 'PKN',
        nama: 'Joko Susilo S.Pd',
        ttl: 'Bogor, 01 Maret 1985',
        nis: 122
    }
    const guruIpa = {
        title: 'IPA',
        nama: 'Anissa Aulia S.Pd',
        ttl: 'Bogor, 20 April 1996',
        nis: 123
    }
    const guruIps = {
        title: 'Bahasa Indonesia',
        nama: 'Siti Susanti S.Pd',
        ttl: 'Bogor, 19 Juli 1995',
        nis: 124
    }
  return (
    <>
            {/* {absen && absen.updatedAt === '' ? (
            <Loader loading={true} />
            ) : (
            <Loader loading={false} />
        )} */}
        <Header title={'Jadwal Pelajaran'} />
        <View style={styles.container}>
            <View style={styles.layout}>
                <Text style={styles.label}>Hari</Text>
                <View style={styles.column}>
                    <View style={styles.row}>
                        <Button title="Senin" onPress={() => navigation.navigate('Senin', {title: 'Senin'})}/>
                    </View>
                    <View style={styles.row}>
                        <Button title="Selasa" onPress={() => navigation.navigate('Selasa', {title: 'Selasa'})}/>
                    </View>
                    <View style={styles.row}>
                        <Button title="Rabu" onPress={() => navigation.navigate('Rabu', {title: 'Rabu'})}/>
                    </View>
                    <View style={styles.row}>
                        <Button title="Kamis" onPress={() => navigation.navigate('Kamis',  {title: 'Kamis'})}/>
                    </View>
                    <View style={styles.row}>
                        <Button title="Jumaat" onPress={() => navigation.navigate('Jumaat', {title: 'Jumaat'})}/>
                    </View>
                </View>
            </View>
            <View style={styles.layout}>
                <Text style={styles.label}>Guru Mata Pelajaran</Text>
                <View style={styles.column}>
                    <View style={styles.rowGuru2}>
                        <Button title="Bahasa Indonesia" onPress={() => navigation.navigate('Bahasa Indonesia', guruBindo)}/>
                    </View>
                    <View style={styles.rowGuru2}>
                        <Button title="Bahasa Inggris" onPress={() => navigation.navigate('Bahasa Inggris', guruBingg)}/>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.rowGuru}>
                        <Button title="IPA" onPress={() => navigation.navigate('IPA',  guruIpa)}/>
                    </View>
                    <View style={styles.rowGuru}>
                        <Button title="IPS" onPress={() => navigation.navigate('IPS', guruIps)}/>
                    </View>
                    <View style={styles.rowGuru}>
                        <Button title="PKN" onPress={() => navigation.navigate('PKN', guruPkn)}/>
                    </View>
                </View>
            </View>
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
    layout: {
        width: '95%',
        marginVertical: 10,
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    row: {
        marginHorizontal: 1,
        width: '20%',
        alignItems: 'center',
    },
    rowGuru: {
        marginHorizontal: 1,
        width: '33.33%',
        alignItems: 'center',
    },
    rowGuru2: {
        marginHorizontal: 1,
        width: '50%',
        alignItems: 'center',
    },
    label: {
        width: '100%',
        alignItems: 'center',
        fontSize: 24,
    },
});

export default Jadwal;
