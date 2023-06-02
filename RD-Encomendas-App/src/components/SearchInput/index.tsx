import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Input } from 'tamagui';


export function SearchInput() {
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
            />
        </View>
    );
}