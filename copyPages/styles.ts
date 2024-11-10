import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },

    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 2,
        marginTop: -10,
    },

    OptionContatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 100,
    },

    Profile: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 25,
        paddingHorizontal: 55,
    },

    textTop: {
        position: 'absolute',
        right: 17,
        top: 42,
        fontSize: 16,
        color: 'white',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 12,
    },

    fotoPerfil: {
        position: 'absolute',
        left: 20,
        top: 40,
        width: 35,
        height: 35,
        borderRadius: 25,
    },

    fotoLogo: {
        position: 'absolute',
        top: 17,
        left: '50%',
        transform: [{ translateX: -40 }],
        width: 80,
        height: 80,
    },

    text: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 50,
        fontWeight: 'bold',
    },

    hr: {
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        width: '100%',
        marginTop: 10,
    },

    image: {
        marginTop: 150,
        marginLeft: 10,
        position: 'absolute',
        borderRadius: 25,
        width: 40,
        height: 40,
    },

    textPosts: {
        color: 'white',
        width: '80%',
        fontSize: 16,
        marginLeft: 55,
        marginTop: 10,
        flexWrap: 'wrap',
    },

    Post: {
        width: '80%',
        height: 350,
        marginTop: 10,
        marginLeft: 55,
        marginBottom: 40,
        borderRadius: 4,
        borderWidth: 0.1,
        borderColor: 'white',
    },

});