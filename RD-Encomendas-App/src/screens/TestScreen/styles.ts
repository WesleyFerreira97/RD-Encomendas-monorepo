import { StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.primary,
    },
    headerContainer: {
        width: '100%',
        backgroundColor: themeColors.primaryAlt,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: themeColors.white,
        fontSize: 36,
        fontWeight: "700",
    }
});