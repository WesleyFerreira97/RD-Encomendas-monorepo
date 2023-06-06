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
    const { control, handleSubmit } = useForm();

    const handleSearchForm = (data: any) => {
        console.log(data, "form values");
    }

    return (
        <View style={styles.container}>

            <HomeHeader />


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
                <Controller
                    control={control}
                    name="search"
                    render={({ field: { onChange } }) => (
                        <>
                            <SearchInput
                                onChangeText={onChange}
                                placeholder="Digite o nome da cidade"
                            />
                        </>
                    )}
                />
            </View>
            <Button icon={<Spinner />} onPress={handleSubmit(handleSearchForm)}>
                Submit
            </Button>
        </View>
    );
}


const ItemsFake = [
    {
        name: "Just a City",
        servicesIncluded: "Coleta e entrega",
    },
    {
        name: "Just Test",
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