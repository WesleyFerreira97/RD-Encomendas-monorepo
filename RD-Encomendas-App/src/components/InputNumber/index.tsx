import React, { isValidElement } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Input } from 'tamagui';
import { useController, UseControllerProps, Control } from 'react-hook-form';
import { themeColors } from '../../style/theme';
import { FormDataProps } from '../../screens/FormFreight';

type InputNumberProps = {
    name: UseControllerProps<FormDataProps>["name"];
    control: Control<FormDataProps, any>;
    label?: string;
    placeholder?: string;
    inputSufix?: string | JSX.Element;
}

export function InputNumber({ name, control, ...props }: InputNumberProps) {
    const { field } = useController({ name, control });
    console.log(typeof props.inputSufix, " check typeof");

    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>
                {props.label}
            </Text>
            <View style={styles.innerContainer}>
                <Input
                    size={"$4"}
                    placeholder={props.placeholder}
                    keyboardType='numeric'
                    onChangeText={field.onChange}
                    outlineColor='transparent'
                    backgroundColor={themeColors.primary}
                    borderWidth={0}
                    placeholderTextColor={themeColors.primaryAlt}
                    style={styles.inputStyle}
                    textAlign='right'
                />
                <View style={styles.inputSufix}>
                    {(typeof props.inputSufix === "string")
                        &&
                        <Text style={styles.text}>{props.inputSufix}</Text>
                    }

                    {(isValidElement(props.inputSufix))
                        &&
                        <Text>{props.inputSufix}</Text>
                    }
                </View>
            </View>
        </View>
    );
}