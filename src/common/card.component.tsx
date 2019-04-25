import  React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Avatar } from './avatar.component';

interface IProps {
    name: string;
    color: string;
    avatar: { uri: string; status?: boolean };
}

export function Card(props: IProps) {
    const { name, color, avatar } = props;
    return (
        <View style={styles.card}>
            <View style={[styles.cardHeader, { backgroundColor: color }]}>
                <Avatar uri={avatar.uri} status={avatar.status}/>
                <Text style={styles.headerText}>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        flex: -1,
        width: 340,
        height: 200,
        borderRadius: 15,
        backgroundColor: 'rgb(250,250,250)',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 10,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    cardHeader: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    headerText: { paddingRight: 20, color: 'white', fontWeight: 'bold', flexDirection: 'column' },
});
