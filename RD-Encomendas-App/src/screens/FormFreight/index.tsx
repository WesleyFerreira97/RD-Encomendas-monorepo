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

type FormDataProps = {
    selectedCity: CityProps;
    weight: number;
    notePrice: number;
}

export function FormFreight() {
    const route = useRoute();
    const { cityName } = route.params as RoutParamsProps;
    const { currentCity } = useCity({ cityName: cityName });
    const { control, handleSubmit, watch } = useForm<FormDataProps>({
        defaultValues: {
            selectedCity: currentCity,
        }
    });

    const city = watch("selectedCity");

    const handleSubmitFreight = (data: FormDataProps) => {
        console.log(data, " : Data");
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerSelectCity}>
                <Buildings size={100} color={themeColors.primaryAlt} />
                <Text style={styles.pageTitle}>
                    {city.name}
                </Text>
                <Text style={styles.pageInfo}>
                    Tarifa : {city.serviceCharge}
                </Text>
                <Text style={styles.pageInfo}>
                    {city.servicesIncluded}
                </Text>


            </View>
            <SelectCity
                native
                control={control}
                name='selectedCity'
                defaultValue={cityName}
                style={styles.selectCityWrap}
            />
            <View style={styles.formContainer}>

                {/* <Button
                    onPress={handleSubmit((data) =>
                        handleSubmitFreight(data))
                    }>
                    Submit
                </Button>
                <Button
                    onPress={handleSubmit((data) =>
                        console.log(formState, " : Data"))
                    }>
                    Handle Check Caurrent City
                </Button> */}
            </View>
        </View>
    );
}