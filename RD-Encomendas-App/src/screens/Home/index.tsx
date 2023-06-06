import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TextInput } from 'react-native';
import { styles } from './styles';
import { citiesMinasGerais } from '../../data/cities';
import { SearchInput } from '../../components/SearchInput';
import { ListItem } from '../../components/ListItem';
import { HomeHeader } from '../../components/HomeHeader';
import { Button, Spinner } from 'tamagui';
import { Controller, FieldValues, useForm } from 'react-hook-form';

type CitiesProps = {
    name: string;
    servicesIncluded: string;
    serviceCharge: number;
}

export function Home() {
    const [cities, setCities] = useState<CitiesProps[]>(itemsFake);
    const { control, handleSubmit, watch, } = useForm();
    const watchSearch = watch("search");
    console.log(cities, "cities");

    const handleSearchForm = (textSearchInput: FieldValues) => {
        console.log(textSearchInput, "form values");

        if (textSearchInput === "") {
            setCities(itemsFake);
        };

        const filtredCities = cities.filter((item) => {
            const itemData = item.name.toUpperCase();
            const textData = textSearchInput.toUpperCase();

            if (itemData.indexOf(textData) > -1) {
                return itemData
            }
        })

        console.log(filtredCities, "form values");

        setCities(filtredCities);
    }

    return (
        <View style={styles.container}>
            <HomeHeader />
            <View style={styles.listWrap}>
                <Text>{watchSearch}</Text>
                <FlatList
                    style={{ width: '100%' }}
                    keyExtractor={(item, index) => index.toString()}
                    data={cities}
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
                                handleChange={handleSearchForm}
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


const itemsFake: CitiesProps[] = [
    {
        name: "Just a City",
        servicesIncluded: "Coleta e entrega",
        serviceCharge: 90,
    },
    {
        name: "Just Test",
        servicesIncluded: "Sem entrega e coleta",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    },
    {
        name: "Avoided",
        servicesIncluded: "Avoided and Avoided",
        serviceCharge: 90,
    }
];