import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
    },
    iconStyle: {
        padding: 10,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    filterButtonStyle: {
        position: 'absolute',
        height: 38,
        width: 38,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3892E4',
    },
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 12,
        width: 335,
        borderRadius: 15,
        backgroundColor: '#313131',
    },
    inputStyle: {
        width: 220,
        color: '#989898'
    },
    detailsTextStyle: {
        color: '#7E7E7E',
        paddingTop: 1,
        fontFamily: 'sans-serif',
        fontSize: 16,
    }
});

