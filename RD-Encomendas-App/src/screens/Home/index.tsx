import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { SearchInput } from '../../components/SearchInput';
import { ListItem } from '../../components/ListItem';
import { HomeHeader } from '../../components/HomeHeader';
import { Controller, useForm } from 'react-hook-form';
import { citiesMinasGerais } from '../../data/cities';
import { useNavigation } from '@react-navigation/native';
import { CityProps } from '../../@types/cities';

type FormProps = {
    search: string;
}

export function Home() {
    const [cities, setCities] = useState<CityProps[]>(citiesMinasGerais);
    const { control } = useForm<FormProps>();
    const navigaiton = useNavigation();

    const handleNavigationToForm = (city: CityProps) => {
        navigaiton.navigate('FormFreight', {
            cityName: city.name,
        });
    }

    const handleSearchInput = (search: string) => {

        if (search === "") {
            return setCities(citiesMinasGerais);
        };

        const filtredCities = citiesMinasGerais.filter((item) => {
            const itemData = item.name.toUpperCase();
            const textData = search.toUpperCase();

            if (itemData.indexOf(textData) > -1) {
                return itemData
            }
        })

        setCities(filtredCities);
    }

    return (
        <View style={styles.container}>
            <HomeHeader />
            <Controller
                control={control}
                name="search"
                render={({ field: { onChange } }) => (
                    <>
                        <SearchInput
                            onChangeText={onChange}
                            handleChange={handleSearchInput}
                            placeholder="Digite o nome da cidade"
                        />
                    </>
                )}
            />
            <View style={styles.listWrap}>
                <FlatList
                    style={{ width: '100%' }}
                    keyExtractor={(item, index) => index.toString()}
                    data={cities}
                    renderItem={({ item }) => (
                        <>
                            <ListItem
                                onPressItem={handleNavigationToForm}
                                itemData={item}
                            />
                        </>
                    )}
                />
            </View>
        </View>
    );
}

