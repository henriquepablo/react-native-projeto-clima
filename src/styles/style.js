import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1786ED',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 350,
        height: 42,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
        paddingLeft: 30
    },
    inputOnFocus: {
        backgroundColor: '#D2F1FF',
        width: 350,
        height: 42,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#fff',
        paddingLeft: 30
    },
    iconSearch: {
        padding: 9,
        marginLeft: -320,
        marginTop: -30
    },
    iconCircleX: {
        padding: 9,
        marginRight: -320,
        marginTop: -18
    }

});

export default styles;