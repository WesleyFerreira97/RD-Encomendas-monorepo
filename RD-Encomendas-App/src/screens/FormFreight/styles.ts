import { StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerSelectCity: {
        height: "40%",
        width: "100%",
        backgroundColor: themeColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
    pageTitle: {
        color: "#fff",
        fontSize: 38,
        fontWeight: "bold",
        paddingBottom: 20,
        textAlign: "center",
    },
    pageInfo: {
        color: "#fff",
        fontSize: 15,
    },
    selectCityWrap: {
        width: "100%",
        // height: "100%",
        backgroundColor: themeColors.primary,
        zIndex: 10,
        position: "relative",
    },
    formContainer: {
        flex: 1,
        backgroundColor: themeColors.primaryAlt,
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: "center",
    },
    buttonSubmit: {
        marginTop: 40,
    }
})