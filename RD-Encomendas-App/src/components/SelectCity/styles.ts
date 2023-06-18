import { StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

export const styles = StyleSheet.create({
    triggerButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        outlineStyle: "none",
        justifyContent: "center",
        width: "100%",
        zIndex: 9999,
    },
    triggerLabel: {
        color: themeColors.primaryAlt,
    }
})