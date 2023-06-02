import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { citiesMinasGerais } from '../../data/cities';
import { SearchInput } from '../../components/SearchInput';
import { ListItem } from '../../components/ListItem';

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Avoided</Text>
            </View>
            <SearchInput />
            <View style={styles.listWrap}>
                {ItemsFake.map((item, index) => (
                    <>
                        <ListItem
                            key={index}
                            itemData={item}
                        />
                    </>
                ))}
            </View>
        </View>
    );
}


const ItemsFake = [
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
    }
];