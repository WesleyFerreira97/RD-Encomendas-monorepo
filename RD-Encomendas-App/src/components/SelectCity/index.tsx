import { SelectProps } from "tamagui";
import { Select } from "tamagui";
import { Text } from 'react-native';
import { ArrowsLeftRight, Check } from "phosphor-react-native";
import { styles } from "./styles";
import { themeColors } from "../../style/theme";
import { Adapt } from "tamagui";
import { Sheet } from "tamagui";
import { citiesMinasGerais } from "../../data/cities";
import { Controller } from "react-hook-form";

type SelectCityProps = {
    onSelectCity: (city: string) => void;
} & SelectProps;

export const SelectCity = (props: SelectCityProps) => {
    const { currentCity, setSelectedCity } = useCity({ cityName: cityName });
    return (
        <Controller
            control={props.control}
            name={props.name}
            render={({ field: { onChange, value } }) => (
                <Select
                    id="currentCity"
                    value={value || props.cityName}
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
            )}
        />
    )
}
