import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type ItemDataProps = {
    itemData: {
        name: string;
        servicesIncluded: string;
    }
}


export function ListItem({ itemData }: ItemDataProps) {
    const { name, servicesIncluded } = itemData;

    const tagStyle = {
        coletaeentrega: "tagServiceLabel",
        apenasEntrega: "tagServiceLabel",
        apenasColeta: "tagServiceLabel",
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.label}>
                {name}
            </Text>
            <View style={styles.tagService}>
                <Text style={styles.tagServiceLabel}>
                    {servicesIncluded}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
