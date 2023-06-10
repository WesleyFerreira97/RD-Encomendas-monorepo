import { StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerSelectCity: {
        height: "50%",
        width: "100%",
        backgroundColor: themeColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
    pageTitle: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        paddingBottom: 30
    },
    pageInfo: {
        color: "#fff",
        fontSize: 20,
    },
    formContainer: {
        flex: 1,
        backgroundColor: themeColors.primaryAlt,
    },
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