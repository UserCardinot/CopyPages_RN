import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "..//styles";

export const App = () => {

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={require('..//assets/images/perfil.png')}
                    style={styles.fotoPerfil}
                />

                <Image
                    source={require('..//assets/images/x.jpg')}
                    style={styles.fotoLogo}
                />

                <Text style={styles.textTop}>Upgrade</Text>
            </View>

            <View style={styles.OptionContatiner}>
                <Text style={styles.text}>For you</Text>
                <Text style={styles.text}>Following</Text>
            </View>

            <View style={styles.hr} />

            <View style={styles.Profile}>
                <Image
                    source={require('..//assets/images/pagina.png')}
                    style={styles.image}
                />

                <Text style={{ color: 'white', fontSize: 17, fontWeight: "bold", marginTop: -20 }}>Dicas By Daylight</Text>

            </View>

            <Text style={{ color: '#787878', fontSize: 14, marginLeft: 200, marginTop: -21 }}>@DicasByDaylight - 1d</Text>
            <Text style={{ color: '#787878', fontSize: 16, marginLeft: 380, marginTop: -25, fontWeight: "bold" }}>...</Text>
            <Text style={styles.textPosts}>Speedrun de fragmentos da fenda até o dia 12 de novembro!</Text>

            <View style={styles.Post}>
                <View style={styles.Profile}>
                    <Image
                        source={require('..//assets/images/dbd.jpg')}
                        style={{ marginTop: 10, marginLeft: 15, position: 'absolute', borderRadius: 25, width: 30, height: 30 }}
                    />

                    <Text style={{ color: 'white', fontSize: 14, fontWeight: "bold", marginTop: -5 }}>Dead By Daylight BR</Text>
                    <Text style={{ color: '#787878', fontSize: 14, marginTop: -5 }}>@DbD... -1d</Text>

                </View>

                <Text style={{
                    color: 'white', width: '90%', fontSize: 14, marginLeft: 18, marginTop: 10, flexWrap: 'wrap',
                }}>Acelere pela Fenda com 4x mais Fragmentos de Fenda através de partidas até 12 de Novembro!</Text>

                <Image
                    source={require('..//assets/images/imgPost.jpeg')}
                    style={{ width: '100%', height: 240, marginTop: 10, borderRadius: 4 }}
                />

                <Image
                    source={require('..//assets/images/curtidas.png')}
                    style={{ marginTop: 15, marginLeft: -20, width: "100%", height: 26 }}
                />
            </View>

            <View style={styles.hr} />

            <View style={styles.Profile}>
                <Image
                    source={require('..//assets/images/pagina.png')}
                    style={styles.image}
                />

                <Text style={{ color: 'white', fontSize: 17, fontWeight: "bold", marginTop: -20 }}>Dicas By Daylight</Text>

            </View>

            <Text style={{ color: '#787878', fontSize: 14, marginLeft: 200, marginTop: -21 }}>@DicasByDaylight - 1d</Text>
            <Text style={{ color: '#787878', fontSize: 16, marginLeft: 380, marginTop: -25, fontWeight: "bold" }}>...</Text>
            <Text style={styles.textPosts}>Quer descobrir a resposta para esta pergunta?</Text>

            <View style={styles.Post}>
                <View style={styles.Profile}>
                    <Image
                        source={require('..//assets/images/dbd.jpg')}
                        style={{ marginTop: 10, marginLeft: 15, position: 'absolute', borderRadius: 25, width: 30, height: 30 }}
                    />

                    <Text style={{ color: 'white', fontSize: 14, fontWeight: "bold", marginTop: -5 }}>Dead By Daylight BR</Text>
                    <Text style={{ color: '#787878', fontSize: 14, marginTop: -5 }}>@DbD... -1d</Text>

                </View>

                <Text style={{
                    color: 'white', width: '90%', fontSize: 14, marginLeft: 18, marginTop: 10, flexWrap: 'wrap',
                }}>Já se perguntou como foi a reação dos assassinos ao encontrar um parceiro durante uma partida 2v8?</Text>
            </View>

        </View>
    );
};

export default App;