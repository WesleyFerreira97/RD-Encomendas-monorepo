import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Adapt, Select, Sheet } from 'tamagui';
import { citiesMinasGerais } from '../../data/cities';

const SelectCity = () => {
    const [value, setValue] = useState<string>("Selecione uma cidade");

    return (
        <>
            <Select id='city' value={value} onValueChange={setValue}>
                <Select.Trigger width={280}>
                    <Select.Value placeholder='Selecione uma cidade' />
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

                <Select.Content zIndex={300}>
                    <Select.Viewport>
                        <Select.Group space="$4">
                            {Object.keys(citiesMinasGerais).map((city, index) => (
                                <Select.Item
                                    index={index}
                                    value={city}
                                >
                                    <Select.ItemText>{citiesMinasGerais[city]}</Select.ItemText>
                                </Select.Item>
                            )
                            )}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select>
        </>
    )
}

export function Home() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Riodex</Text>
            </View>
            <View style={styles.listWrap}>
                <SelectCity />
            </View>
        </>
    );
}


