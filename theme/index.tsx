import { StyleSheet, Dimensions } from 'react-native';

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
    },

      modalView: {
        marginTop: 'auto',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 25,
        alignItems: 'center',

      },
      sortRadioButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
      },
      radioButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#3892E4',
        borderRadius: 5,
      },
      modalBackdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});

