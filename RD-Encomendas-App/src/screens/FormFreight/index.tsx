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
import { useCalcFreight } from '../../hooks/useCalcFreight';

type RoutParamsProps = {
    cityName: string;
}

export type FormDataProps = {
    selectedCity: CityProps;
    weight: number;
    notePrice: number;
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
    const [openCalcRules, setOpenCalcRules] = useState<boolean>(false);

    const { freightValues, setCalcValues } = useCalcFreight();

    const { control, handleSubmit, watch, formState: { errors }, } = useForm<FormDataProps>({
        defaultValues: {
            selectedCity: currentCity,
        },
    });

    const { weight, notePrice, selectedCity: city } = watch();
    const handleToggle = () => setOpenCalcRules((prevState) => !prevState);

    const handleSubmitFreight = (data: FormDataProps) => {
        const { weight, notePrice, selectedCity: { serviceCharge } } = data;
        const currentServiceChargeRange = priceByServiceCharge[serviceCharge];

        setCalcValues({ weight, notePrice, currentServiceChargeRange });
    }

    useEffect(() => {
        console.log(freightValues);

    }, [freightValues])

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
                            {/* <Text style={styles.totalLabel}>R${totalFreight}</Text> */}
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

// o hook precisa retornar :
// Valor do 1% da nota
// Preço do kilo
// Taxa de despacho