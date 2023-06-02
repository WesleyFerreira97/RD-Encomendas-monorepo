import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const maxHeight = 200;
const minHeight = 70;
const minMaxDifference = maxHeight - minHeight;

export function HomeHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Avoided</Text>
        </View>
    );
}