import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { CityProps } from '../../@types/cities';
import { useRoute } from '@react-navigation/native';
import { Sheet } from 'tamagui';
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

type FreightValuesProps = {
    taxByValue: number;
    notePrice: number;
    weight: number;
    totalFreight: number;
}

export function FormFreight() {
    const route = useRoute();
    const { cityName } = route.params as RoutParamsProps;
    const { currentCity } = useCity({ cityName: cityName });
    const [totalFreight, setTotalFreight] = useState<number>(0);
    // const [freightValues, setFreightValues] = useState<>({} as FormDataProps);
    const [openCalcRules, setOpenCalcRules] = useState<boolean>(false);
    const { control, handleSubmit, watch, formState: { errors }, } = useForm<FormDataProps>({
        defaultValues: {
            selectedCity: currentCity,
        },
    });

    const { weight, notePrice, selectedCity: city } = watch();
    const handleToggle = () => setOpenCalcRules((prevState) => !prevState);

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
                        <TouchableOpacity
                            style={styles.totalFreight}
                            onPress={handleToggle}
                        >
                            <Text style={styles.totalLabel}>R${totalFreight}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Sheet
                    open={openCalcRules}
                    onOpenChange={handleToggle}
                    dismissOnSnapToBottom
                    snapPoints={[35]}
                    animation="bouncy"
                >
                    <Sheet.Handle />
                    <Sheet.Overlay />
                    <Sheet.Frame
                        flex={1}
                        justifyContent="center"
                        alignItems="center"
                        zIndex={200}
                        position="relative"
                        borderTopLeftRadius="$6"
                        borderTopRightRadius="$6"
                        paddingTop="$6"
                        paddingHorizontal="$6"
                        backgroundColor="#0F1B2D"
                    >
                        <View style={{
                            height: "100%",
                            width: "100%",
                            zIndex: 1000,
                            position: "absolute",
                        }}>
                            <Text style={styles.infoRule}>
                                - Acrescentado 1% do valor total da nota :
                            </Text>
                            <Text style={styles.infoValues}>
                                1% de R$200 = R$2,00
                            </Text>
                            <Text style={styles.infoRule}>
                                - Este frete foi acima de 51kg
                            </Text>
                            <Text style={styles.infoValues}>
                                69Kg, cada quilo custou R$1,83, totalizando R$126,27
                            </Text>
                            <Text style={styles.infoRule}>
                                - Adicionado taxa de despacho para fretes acima de R$51kg no valor de R$35,00
                            </Text>
                        </View>
                    </Sheet.Frame>
                </Sheet>
            </ScrollView>
        </View>
    );
}

// Valor da nota fiscal
// 1% do valor total da nota
// Preço do kilo
// Taxa de despacho