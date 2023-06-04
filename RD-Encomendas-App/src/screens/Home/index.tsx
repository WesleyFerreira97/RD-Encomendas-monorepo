import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { citiesMinasGerais } from '../../data/cities';
import { SearchInput } from '../../components/SearchInput';
import { ListItem } from '../../components/ListItem';
import { HomeHeader } from '../../components/HomeHeader';

export function Home() {
    console.log(ItemsFake);

    return (
        <View style={styles.container}>
            <HomeHeader />
            <SearchInput />
            <View style={styles.listWrap}>
                <FlatList
                    style={{ width: '100%' }}
                    keyExtractor={(item, index) => index.toString()}
                    data={ItemsFake}
                    renderItem={({ item }) => (
                        <ListItem
                            itemData={item}
                        />
                    )}
                />
            </View>
        </View>
    );
}


const ItemsFake = [
    {
        name: "Governador Valadares",
        servicesIncluded: "Coleta e entrega",
    },
    {
        name: "Teofilo Ottoni",
        servicesIncluded: "Sem entrega e coleta",
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