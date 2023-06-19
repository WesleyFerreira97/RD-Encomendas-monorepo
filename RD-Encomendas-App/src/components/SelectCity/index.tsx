import { SelectProps } from "tamagui";
import { Select } from "tamagui";
import { View, Text, ViewStyle } from 'react-native';
import { ArrowsLeftRight, Check } from "phosphor-react-native";
import { styles } from "./styles";
import { themeColors } from "../../style/theme";
import { Adapt } from "tamagui";
import { Sheet } from "tamagui";
import { citiesMinasGerais } from "../../data/cities";
import { Controller, ControllerProps, useController } from "react-hook-form";
import { useCity } from "../../hooks/useCity";
import { CityProps } from "../../@types/cities";

type SelectCityProps = {
    name: string;
    defaultValue: string;
    style?: ViewStyle
} & SelectProps & Partial<ControllerProps | any>;

export const SelectCity = ({ control, name, defaultValue, ...props }: SelectCityProps) => {
    const { field } = useController({ name, control, defaultValue, });
    field.value = defaultValue;

    const handleOnSelect = (value: string) => {

        const filterCityByName = (name: string): CityProps | string => {
            const filtredCity = citiesMinasGerais.find(city => {
                return city.name === name;
            });
            if (filtredCity === undefined) return "This city is not available";

            return filtredCity;
        }

        const filtredCity = filterCityByName(value);

        field.onChange(filtredCity);
    }

    return (
        <View {...props.style}>
            <Select
                id="currentCity"
                name={field.name}
                value={field.value}
                onValueChange={(value) => handleOnSelect(value)}
                defaultValue={defaultValue}
            >
                <Select.Trigger
                    style={styles.triggerButton}
                    width={"auto"}
                    pressStyle={{ transform: [{ scale: .90 }] }}
                >
                    <ArrowsLeftRight
                        color={themeColors.primaryAlt}
                        size={40}
                    />
                    <Text style={styles.triggerLabel}>
                        Alterar Cidade
                    </Text>
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
            </Select>
        </View>
    )
}
