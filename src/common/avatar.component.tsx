import { Image, View, StyleSheet } from 'react-native';
import React from 'react';

interface IProps {
    uri: any;
    status?: boolean;
}

export function Avatar(props: IProps) {
    const { status, uri } = props;

    return (
        <View>
            <Image source={uri} style={styles.avatar} />
            {status ? <View style={styles.status} /> : <View />}
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        alignSelf: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 20,
        marginTop: 32,
    },
    status: {
        borderRadius: 50,
        width: 10,
        height: 10,
        backgroundColor: 'rgb(83,229,85)',
        zIndex: 1,
        left: 70,
        bottom: 15,
    },
});
