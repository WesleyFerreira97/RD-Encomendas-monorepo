import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Input } from 'tamagui';
import { View } from 'react-native';

type SearchInputProps = {
    onChangeText: (...event: any[]) => void;
    placeholder: string;
    handleChange: any;
}

export function SearchInput({ ...rest }: SearchInputProps) {

    return (
        <View style={styles.inputContainer}>
            <Input
                placeholder={rest.placeholder}
                size="$5"
                flex={1}
                style={styles.inputStyle}
                backgroundColor="#222"
                borderColor="#222"
                color="#fff"
                placeholderTextColor="#fff"
                cursorColor="#F34E4E"
                outlineColor='#F34E4E'
                onChangeText={(e) => {
                    rest.onChangeText(e),
                        rest.handleChange(e)
                }}
            />
        </View>
    );
}