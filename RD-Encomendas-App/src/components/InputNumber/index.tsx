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
    rules?: UseControllerProps<FormDataProps>["rules"];
    inputSufix?: string | JSX.Element;
}

export function InputNumber({ name, control, ...props }: InputNumberProps) {
    const greaterThanZero = (value: unknown) => {
        return Number(value) > 0 || 'O Valor deve ser maior que 0';
    };

    const { field, fieldState } = useController({
        name,
        control,
        rules: {
            required: "Este campo é obrigatório",
            validate: greaterThanZero,
        },
    });

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

            {fieldState.error && (
                <Text style={styles.errorMessage}>{fieldState.error.message}</Text>
            )}
        </View>
    );
}