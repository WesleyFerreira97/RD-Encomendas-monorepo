import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CityProps } from '../../@types/cities';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Input } from 'tamagui';
import { Buildings } from 'phosphor-react-native';
import { themeColors } from '../../style/theme';
import { useCity } from '../../hooks/useCity';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { SelectCity } from '../../components/SelectCity';
import { InputNumber } from '../../components/InputNumber';

type RoutParamsProps = {
    cityName: string;
}

export type FormDataProps = {
    selectedCity: CityProps;
    weight: number;
    notePrice: number;
}

export function FormFreight() {
    const route = useRoute();
    const { cityName } = route.params as RoutParamsProps;
    const { currentCity } = useCity({ cityName: cityName });
    const [totalFreight, setTotalFreight] = useState(0);
    const { control, handleSubmit, watch, formState } = useForm<FormDataProps>({
        defaultValues: {
            selectedCity: currentCity,
            weight: 0,
            notePrice: 0,
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
                <InputNumber
                    name='weight'
                    control={control}
                    placeholder='Peso em KG'
                    label='Insira o peso total da mercadoria'
                    inputSufix='KG'
                />
                <InputNumber
                    name='notePrice'
                    control={control}
                    placeholder='Valor da Nota Fiscal'
                    label="Insira o valor da nota fiscal"
                    inputSufix={<Buildings size={20} color={themeColors.primaryAlt} />}
                />
                <View style={styles.submitContainer} >
                    <TouchableOpacity
                        style={styles.touchableSubmit}
                        onPress={handleSubmit((data) =>
                            handleSubmitFreight(data))
                        }>
                        <Text style={styles.touchableLabel}>
                            Calcular Frete
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.totalFreight}>
                        <Text style={styles.totalLabel}>R${totalFreight}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}