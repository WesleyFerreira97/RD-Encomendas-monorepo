import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
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
import { priceByServiceCharge } from '../../data/cities';

type RoutParamsProps = {
    cityName: string;
}

export type FormDataProps = {
    selectedCity: CityProps;
    weight?: number;
    notePrice?: number;
}

export function FormFreight() {
    const route = useRoute();
    const { cityName } = route.params as RoutParamsProps;
    const { currentCity } = useCity({ cityName: cityName });
    const [totalFreight, setTotalFreight] = useState<number>(0);
    const { control, handleSubmit, watch, formState: { errors }, } = useForm<FormDataProps>({
        defaultValues: {
            selectedCity: currentCity,
        },
    });

    // const city = watch("selectedCity");
    const { weight, notePrice, selectedCity: city } = watch();

    useEffect(() => {
        // useEffect temporary, to reset totalFreight when change city
        setTotalFreight(0)
    }, [weight, notePrice, city])


    const percentageByPrice = (price: number) => {
        // add 1% for each KG
        const percentage = (price / 100) * 1;
        return percentage;
    }

    const calcByBusinessRule = ({ weight, notePrice, currentServiceChargeRange }: any) => {
        const taxByValue = percentageByPrice(notePrice);

        // If weight 0 reset totalFreight
        if (weight === 0 || notePrice === 0) setTotalFreight(0);

        if (weight >= 51) {
            const kgPrice = currentServiceChargeRange[5].price;
            const clearenceFee = 37;
            const totalFreight = (kgPrice * weight) + clearenceFee + taxByValue;

            setTotalFreight(totalFreight.toFixed(2));
        }

        Object.keys(currentServiceChargeRange).forEach((key) => {
            const { maxWeight, minWeight, price } = currentServiceChargeRange[key];

            if (weight >= minWeight && weight <= maxWeight) {
                const totalFreight = taxByValue + price;
                setTotalFreight(totalFreight.toFixed(2));
            }
        })
    }

    const handleSubmitFreight = (data: FormDataProps) => {
        const { weight, notePrice, selectedCity: { serviceCharge } } = data;
        const currentServiceChargeRange = priceByServiceCharge[serviceCharge];

        calcByBusinessRule({ weight, notePrice, currentServiceChargeRange });
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

                    <View>
                        <Text>Acrescentado 1% do valor total da nota</Text>
                        <Text>1% de R$200 = R$2,00</Text>
                        <Text>Este frete foi acima de 51kg</Text>
                        <Text>69Kg, cada quilo custou R$1,83, totalizando R$126,27</Text>
                        <Text>Adicionado taxa de despacho para fretes acima de R$51kg no valor de R$35,00</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}