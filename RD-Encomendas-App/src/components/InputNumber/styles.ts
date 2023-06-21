import { StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        width: "100%",
    },
    innerContainer: {
        flexDirection: "row",
        backgroundColor: themeColors.primary,
        borderRadius: 18,
        overflow: "hidden",
    },
    labelText: {
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 10,
        color: themeColors.white,
        marginLeft: 15,
    },
    inputStyle: {
        color: "white",
        flexGrow: 1,
    },
    inputSufix: {
        backgroundColor: "#1F1D36",
        minWidth: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff"
    },
    errorMessage: {
        color: "#F2BE22",
        fontWeight: "500",
        marginLeft: 15,
        marginTop: 5,
    }
});