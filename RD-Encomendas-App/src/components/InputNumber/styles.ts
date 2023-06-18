import { StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: "80%",
    },
    innerContainer: {
        flexDirection: "row",
        backgroundColor: themeColors.primary,
        // borderRadius: 18,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
        overflow: "hidden",
    },
    labelText: {
        fontSize: 15,
        fontWeight: "400",
        marginBottom: 10,
        color: themeColors.white,
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
    }
});