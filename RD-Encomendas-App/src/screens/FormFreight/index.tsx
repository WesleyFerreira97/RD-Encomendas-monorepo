import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CityProps } from '../../@types/cities';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from 'tamagui';
import { Buildings } from 'phosphor-react-native';
import { themeColors } from '../../style/theme';
import { useCity } from '../../hooks/useCity';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { SelectCity } from '../../components/SelectCity';

type RoutParamsProps = {
    cityName: string;
}

type FormDataProps = CityProps & {
    weight: number;
    notePrice: number;
}

export function FormFreight() {
    const route = useRoute();
    const { cityName } = route.params as RoutParamsProps;
    const { control, handleSubmit, formState, watch, setValue, } = useForm();

    const { selectedCity } = watch();
    return (
        <View style={styles.container}>
            <View style={styles.headerSelectCity}>
                <Buildings size={100} color={themeColors.primaryAlt} />
                <Text style={styles.pageTitle}>
                    {selectedCity.name}
                </Text>
                <Text style={styles.pageTitle}>
                    {selectedCity.name}
                </Text>
                <Text style={styles.pageInfo}>
                    Tarifa : {currentCity.serviceCharge}
                </Text>
                <Text style={styles.pageInfo}>
                    {currentCity.servicesIncluded}
                </Text>

                <SelectCity
                    native
                    name='selectedCity'
                    value={cityName}
                    control={control}
                    onSelectCity={handleChangeCity}
                />

            </View>
            <View style={styles.formContainer}>

                <Button
                    onPress={handleSubmit((data) => console.log(data))}
                >
                    Submit
                </Button>
            </View>
        </View>
    );
}


// 1º Problema - O header da pagina está consumindo o valor do current city e não atualiza após o input do usuário
// 2º Problema - 