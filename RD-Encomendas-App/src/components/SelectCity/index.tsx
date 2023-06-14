import { SelectProps } from "tamagui";
import { Select } from "tamagui";
import { Text } from 'react-native';
import { ArrowsLeftRight, Check } from "phosphor-react-native";
import { styles } from "./styles";
import { themeColors } from "../../style/theme";
import { Adapt } from "tamagui";
import { Sheet } from "tamagui";
import { citiesMinasGerais } from "../../data/cities";
import { Controller, ControllerProps, useController } from "react-hook-form";
import { useCity } from "../../hooks/useCity";

type SelectCityProps = {
    name: string;
    defaultValue: string;
} & SelectProps & Partial<ControllerProps | any>;

export const SelectCity = ({ control, name, defaultValue }: SelectCityProps) => {
    const { currentCity, setSelectedCity } = useCity({ cityName: defaultValue });
    const { field } = useController({ control, name, defaultValue });
    console.log(name);

    const handleOnSelect = (value: string) => {
        setSelectedCity(value);

        field.onChange(currentCity);
    }

    return (
        <>
            <Select
                id="currentCity"
                value={field.value}
                onValueChange={handleOnSelect}
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
            </Select>
        </>
    )
}
