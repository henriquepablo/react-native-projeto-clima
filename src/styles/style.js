import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
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
    },
    body: {
        height: 697,
    },
    gradient: {
        height: 510
    },
    ViewLocalidade: {
        flexDirection: 'row',
        marginLeft: 20,
        height: 36,
        alignContent: 'center'
    },
    textLocalidade: {
        fontSize: 24,
        color: '#fff',
        marginLeft: 10,
        fontFamily: 'Poppins-Regular'
    },
    imageMap: {
        height: 24,
        marginTop: 5
    },
    infoData: {
        color: '#fff',
        fontSize: 14,
        
        fontWeight: '400',
        fontFamily: 'Poppins-Medium'
    },
    viewTemperatura: {
        alignItems: 'center',
        marginTop: 15
    },
    temperatura: {
        fontSize: 42,
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold'
    },
    sensacao: {
        fontSize: 18,
        color: '#E7E7E7',
        marginTop: 12,
        fontFamily: 'Poppins-SemiBold'
    },
    viewCard: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        flexDirection: 'row',
        gap: 9,
        flexWrap: 'wrap'
    },  
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 116,
        width: 87,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    dataApi: {
        color: '#454545',
        margin: 5,
        fontFamily: 'Poppins-Regular',
    },
    textCard: {
        textAlign: 'center',
        color: '#888888',
        fontFamily: 'Poppins-Regular',
        fontSize: 13
    },
    viewInfo: {
        borderStyle: 'solid',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 366,
        height: 138,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        marginTop: 30,
        borderRadius: 8,
    },
    lines: {
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 30,
        width: 342,
        borderRadius: 6,
        borderColor: '#D1D1D1',
        alignItems:'center',
        padding: 4,
        gap: 10,
        margin: 4.5
    },
    viewDays: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 62
    },
    dayWeek: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 342,
        height: 41,
        borderRadius: 6,
        marginBottom: 10,

    },
    gradientScreenTwo: {
        height: 600
    },
    previousRain: {
        marginTop: 5,
        backgroundColor: '#fff',
        width: 342,
        height: 80,
        borderRadius: 6,
    },
    rain: {
        flexDirection: 'row',
        gap: 10,
        margin: 10
    },
    viewRain: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textRain: {
        fontWeight: 'bold',
        color: '#000'
    },
    percentage: {
        color: '#38A9F9',
        fontSize: 30,
        marginTop: -15,
        fontWeight: 'bold'
    }

});

export default styles;