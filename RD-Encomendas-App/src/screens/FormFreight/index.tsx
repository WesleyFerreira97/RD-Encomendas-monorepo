import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CityProps } from '../../@types/cities';
import { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Adapt, Select, SelectProps, Sheet } from 'tamagui';
import { citiesMinasGerais } from '../../data/cities';
import { Check } from 'phosphor-react-native';

type RoutParamsProps = {
    city: CityProps
}

const SelectCity = (props: SelectProps) => {
    const [selectedCity, setSelectedCity] = useState<string>("");

    return (
        <Select id="currentCity" value={selectedCity} onValueChange={setSelectedCity}>
            <Select.Trigger width={180} >
                <Select.Value placeholder="Something" />
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
                                <Check size={16} />
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
    const { city } = route.params as RoutParamsProps;

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>{city.name}</Text>
            <Text style={styles.pageInfo}>Tarifa : {city.serviceCharge}</Text>
            <Text style={styles.pageInfo}>{city.servicesIncluded}</Text>
            <SelectCity native />
        </View>
    );
}