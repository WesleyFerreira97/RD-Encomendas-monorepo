import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MapPin } from 'phosphor-react-native';
import { Button } from 'tamagui';
import { CityProps } from '../../@types/cities';

type ItemDataProps = {
    itemData: CityProps;
    onPressItem: (city: CityProps) => void;
}

export function ListItem({ itemData, onPressItem }: ItemDataProps) {
    const { name, servicesIncluded } = itemData;

    const tagStyle = {
        coletaeentrega: "tagServiceLabel",
        apenasEntrega: "tagServiceLabel",
        apenasColeta: "tagServiceLabel",
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPressItem(itemData)}
        >
            <View style={styles.labelWrap}>
                <MapPin size={30} />
                <Text style={styles.label}>
                    {name}
                </Text>
            </View>
            <View style={styles.tagService}>
                <Text style={styles.tagServiceLabel}>
                    {servicesIncluded}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
