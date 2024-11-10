import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#252525',
        alignItems: 'center',
    },

    emailContainer: {
        width: '90%',
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    header: {
        backgroundColor: '#363636',
        top: 20,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 70,
    },

    menuIcon: {
        width: 30,
        height: -10,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },

    bar: {
        width: 25,
        height: 2,
        backgroundColor: 'white',
        marginVertical: 2,
    },

    searchBar: {
        backgroundColor: '#363636',
        width: 250,
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 8,
        flex: 1,
        color: 'white',
    },

    image: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },

    imageEmail: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },

    footer: {
        backgroundColor: '#363636',
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    composeContainer: {
        backgroundColor: '#363636',
        height: 40,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 50,
        width: '30%',
        bottom: 100,
        right: 20,
    },

    textComposer: {
        fontSize: 16,
        color: '#ab7487',
        marginLeft: 40,
    },

    imageCompose: {
        width: 20,
        height: 20,
        position: 'absolute',
        bottom: 10,
        right: 85,
    },

    imageCarta: {
        width: 30,
        height: 30,
    },


});