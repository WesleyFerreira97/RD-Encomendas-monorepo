import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function HomeHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Riodex</Text>
        </View>
    );
}