import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CityProps } from '../../@types/cities';
import { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Adapt, Button, Select, SelectProps, Sheet } from 'tamagui';
import { citiesMinasGerais } from '../../data/cities';
import { Buildings, Check, ArrowsLeftRight } from 'phosphor-react-native';
import { themeColors } from '../../style/theme';
import { useCity } from '../../hooks/useCity';
import { Controller, useForm } from 'react-hook-form';

type RoutParamsProps = {
    cityName: string;
}

type SelectCityProps = {
    onSelectCity: (city: string) => void;
} & SelectProps;

const SelectCity = (props: SelectCityProps) => {

    return (
        <Select
            id="currentCity"
            value={props.value}
            onValueChange={(e) => props.onSelectCity(e)}
        >
            <Select.Trigger style={styles.triggerButton} width={"auto"}>
                <ArrowsLeftRight color={themeColors.primaryAlt} size={40} />
                <Text style={styles.triggerLabel}>Alterar Cidade</Text>
            </Select.Trigger>

            <Adapt when="sm" platform="touch">
                <Sheet native modal dismissOnSnapToBottom>
                    <Sheet.Frame>
                        <Sheet.ScrollView>
                            <Adapt.Contents />
                        </Sheet.ScrollView>
                    </Sheet.Frame>
                    <Sheet.Overlay />
                </Sheet>
            </Adapt>
            <Select.Content zIndex={99}>
                <Select.Viewport>
                    {citiesMinasGerais.map((city, i) => (
                        <Select.Item index={i} key={i} value={city.name}>
                            <Select.ItemText>
                                {city.name}
                            </Select.ItemText>
                            <Select.ItemIndicator marginLeft="auto">
                                <Check size={24} />
                            </Select.ItemIndicator>
                        </Select.Item>
                    ))}
                </Select.Viewport>
            </Select.Content>
        </Select >
    )
}

type FormDataProps = CityProps & {
    weight: number;
    notePrice: number;
}

export function FormFreight() {
    const route = useRoute();
    const { cityName } = route.params as RoutParamsProps;
    const { control, handleSubmit, } = useForm();
    const { currentCity, setSelectedCity } = useCity({ cityName: cityName });

    const [formData, setFormData] = useState<FormDataProps>({
        name: "",
        serviceCharge: 0,
        servicesIncluded: "",
        weight: 0,
        notePrice: 0,
    });

    const handleChangeCity = (city: string) => {
        setFormData((prevState) => ({ ...prevState, city }))
        setSelectedCity(city);
    }
    console.log(control);

    return (
        <View style={styles.container}>
            <View style={styles.headerSelectCity}>
                <Buildings size={100} color={themeColors.primaryAlt} />
                <Text style={styles.pageTitle}>{currentCity.name}</Text>
                <Text style={styles.pageInfo}>Tarifa : {currentCity.serviceCharge}</Text>
                <Text style={styles.pageInfo}>{currentCity.servicesIncluded}</Text>
                <Controller
                    control={control}
                    name='selectCity'
                    render={({ field: { onChange } }) => (
                        <SelectCity
                            native
                            value={currentCity.name}
                            onSelectCity={handleChangeCity}
                        />
                    )}
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