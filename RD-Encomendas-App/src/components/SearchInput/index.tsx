import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Input } from 'tamagui';
import {
    Text,
    View,
    TextInput,
    NativeSyntheticEvent,
    TextInputChangeEventData
} from 'react-native';


export function SearchInput() {
    const [value, setValue] = useState('')

    const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(event.nativeEvent.text)
    }

    return (
        <View style={styles.inputContainer}>
            <Input
                placeholder='Buscar Cidade'
                size="$5"
                flex={1}
                style={styles.inputStyle}
                backgroundColor="#222"
                borderColor="#222"
                color="#fff"
                placeholderTextColor="#fff"
                cursorColor="#F34E4E"
                onFocus={() => console.log('focus')}
                outlineColor='#F34E4E'
                onChange={(e) => handleChange(e)}
                value={value}
            />

            <Text style={{ color: "#222" }}>{value}</Text>
        </View>
    );
}