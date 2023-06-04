import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#F0EBE3',
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexWrap: 'wrap',
    },
    labelWrap: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20
    },
    label: {
        color: '#222',
        alignItems: 'center',
        paddingLeft: 4,
    },
    IconPinStyle: {
    },
    tagService: {
        backgroundColor: '#222',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    tagServiceLabel: {
        color: '#fff',
    }
});