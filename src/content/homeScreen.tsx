import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { mock } from '../../assets/mock';
import { Card } from '../common/card.component';
import React from 'react';

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={mock}
                renderItem={({ item }: any) => <Card name={item.name} color={item.color} avatar={item.avatar} />}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(249,249,249)',
    },
});
