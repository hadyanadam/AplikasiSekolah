import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Header from './Header';
import Loader from './Loader';
import Icons from 'react-native-vector-icons/Ionicons';
import {formatDate} from '../utils/textUtils';

const JadwalHarian = ({navigation, user, token, url}) => {
  return (
    <>
            {/* {absen && absen.updatedAt === '' ? (
            <Loader loading={true} />
            ) : (
            <Loader loading={false} />
        )} */}
        <View style={styles.container}>
            <View style={styles.column}>
                <View style={styles.row}>
                    <Text>Mata Pelajaran</Text>
                </View>
                <View style={styles.row}>
                    <Text>Waktu</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.rowLeft}>
                    <Text>Bahasa Indonesia</Text>
                </View>
                <View style={styles.row}>
                    <Text>08:00 - 10:00</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.rowLeft}>
                    <Text>PKN</Text>
                </View>
                <View style={styles.row}>
                    <Text>10:00 - 12:00</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.rowLeft}>
                    <Text>Bahasa Inggris</Text>
                </View>
                <View style={styles.row}>
                    <Text>13:00 - 15:00</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.rowLeft}>
                    <Text>IPA</Text>
                </View>
                <View style={styles.row}>
                    <Text>15:00 - 17:00</Text>
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
    column: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    row: {
        marginHorizontal: 1,
        width: '50%',
        alignItems: 'center',
    },
    rowLeft: {
        marginHorizontal: 1,
        width: '50%',
        alignItems: 'center',
        borderRightWidth: 1,
    },
    rowRight: {
        marginHorizontal: 1,
        width: '50%',
        alignItems: 'center',
    },
    label: {
        width: '100%',
        alignItems: 'center',
        fontSize: 16,
    },
});

export default JadwalHarian;
