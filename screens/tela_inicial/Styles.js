/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
// @import url('https://fonts.googleapis.com/css2?family=Averia+Libre:wght@300;400;700&display=swap');

const styles = StyleSheet.create({
    teste: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    body: {
        flex: 100,
        backgroundColor: '#54837E',
        height: '100%',
    },
    imageBG: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    bgBlurdView: {
        backgroundColor: 'Red',
    },
    header: {
        flex: 20,
        height: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
    },
    titleHeader: {
        color: '#419ED7',
        fontFamily: 'Cochin',
        fontSize: 32,
    },
    subTitle: {
        flex: 20,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    titleSub: {
        color: '#419ED7',
        fontSize: 30,
        textAlign: 'center',
    },
    textInput: {
        fontSize: 18,
    },
    inputContainer: {
        flex: 20,
        justifyContent: 'flex-end',
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 14,
    },
    input: {
        width: 264,
        height: 38,
        backgroundColor: '#ffffff',
        fontSize: 16,
        color: '#419ED7',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 5,
    },
    buttonContainer: {
        flex: 50,
        justifyContent: 'space-around',
    },
    buttonLogin: {
        backgroundColor: '#49B976',
        width: 150,
        height: 40,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonRegister: {
        backgroundColor: '#419ED7',
        width: 200,
        height: 40,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonForget: {
        backgroundColor: '#B0CCDE',
        width: 200,
        height: 26,
        borderRadius: 14,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        alignSelf: 'center',
    },
    buttonTextForget: {
        color: '#FFFFFF',
        fontSize: 14,
        alignSelf: 'center',
    },
    secondaryButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        alignSelf: 'center',
    },
});

export { styles };
