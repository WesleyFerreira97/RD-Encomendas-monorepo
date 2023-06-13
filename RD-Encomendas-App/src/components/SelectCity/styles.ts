import { StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

export const styles = StyleSheet.create({
    triggerButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        position: "absolute",
        bottom: 10,
        outlineStyle: "none",
        justifyContent: "center",
    },
    triggerLabel: {
        color: themeColors.primaryAlt,
    }
})