import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CityProps } from '../../@types/cities';
import { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';

type RoutParamsProps = {
    city: CityProps
}

export function FormFreight() {
    const route = useRoute();
    const { city } = route.params as RoutParamsProps;

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>{city.name}</Text>
            <Text style={styles.pageInfo}>Tarifa : {city.serviceCharge}</Text>
            <Text style={styles.pageInfo}>{city.servicesIncluded}</Text>
        </View>
    );
}