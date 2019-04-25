import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../common/avatar.component';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

export function Drawer() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Avatar uri={require('../../assets/img/1.jpeg')} />
                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                    <Text style={styles.headerText}>Justine Marshall</Text>
                    <Entypo name="edit" style={{ color: 'rgb(184,235,241)' }} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(249,249,249)',
    },
    header: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'rgb(31,188,210)',
    },
    headerText: { paddingRight: 20, color: 'white', fontWeight: 'bold' },
});
