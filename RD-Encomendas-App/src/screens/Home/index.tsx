import React, { useState } from 'react';
import { Text, View, FlatList, TextInput } from 'react-native';
import { styles } from './styles';
import { citiesMinasGerais } from '../../data/cities';
import { SearchInput } from '../../components/SearchInput';
import { ListItem } from '../../components/ListItem';
import { HomeHeader } from '../../components/HomeHeader';
import { Button, Spinner } from 'tamagui';
import { Controller, useForm } from 'react-hook-form';

export function Home() {
    const [cities, setCities] = useState("");
    const { control } = useForm({
        defaultValues: {

        }
    })

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="search"
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <TextInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Enter your name"
                        />
                    </>
                )}
            />
            <HomeHeader />
            <SearchInput
            // placeholder="Digite o nome da cidade"
            />

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
            <Button icon={<Spinner />}>
                Submit
            </Button>
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