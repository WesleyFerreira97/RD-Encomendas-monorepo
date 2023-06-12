import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CityProps } from '../../@types/cities';
import { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Adapt, Button, Select, SelectProps, Sheet } from 'tamagui';
import { citiesMinasGerais } from '../../data/cities';
import { Check } from 'phosphor-react-native';

type RoutParamsProps = {
    cityName: Pick<CityProps, 'name'>;
}

const SelectCity = (props: SelectProps) => {
    const [selectedCity, setSelectedCity] = useState<string>("");

    return (
        <Select id="currentCity" value={selectedCity} onValueChange={setSelectedCity}>
            <Select.Trigger width={90} backgroundColor="#3606b8" style={{ width: 500 }}>
                <Text>Alterar Cidade </Text>
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

export function FormFreight() {
    const route = useRoute();
    const { cityName } = route.params as RoutParamsProps;

    return (
        <View style={styles.container}>
            {/* <Text style={styles.pageTitle}>{cityName.name}</Text>
            <Text style={styles.pageInfo}>Tarifa : {cityName.serviceCharge}</Text>
            <Text style={styles.pageInfo}>{cityName.servicesIncluded}</Text> */}
            <SelectCity native />
        </View>
    );
}