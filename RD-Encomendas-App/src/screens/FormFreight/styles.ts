import { Dimensions, StyleSheet } from 'react-native';
import { themeColors } from '../../style/theme';

const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexGrow: 1,
    },

    headerSelectCity: {
        height: screenHeight * 0.4,
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
        // height: "10%",
        backgroundColor: themeColors.primary,
        zIndex: 10,
        position: "relative",
    },
    formContainer: {
        flex: 1,
        backgroundColor: themeColors.primaryAlt,
        paddingHorizontal: 35,
        paddingTop: 20,
        alignItems: "center",
        borderTopColor: themeColors.secondary,
        borderTopWidth: 3,
    },
    submitContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        borderRadius: 15,
        overflow: "hidden",
    },
    touchableSubmit: {
        backgroundColor: themeColors.secondary,
        padding: 20,
        height: "100%"
    },
    touchableLabel: {
        color: themeColors.white,
    },
    totalFreight: {
        flexGrow: 1,
        backgroundColor: themeColors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    totalLabel: {
        color: themeColors.white,
    }
})