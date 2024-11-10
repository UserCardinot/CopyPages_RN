import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { styles } from "..//styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menuIcon}>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
          <View style={styles.bar}></View>
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search in mail"
          placeholderTextColor="#ababab"
        />

        <Image
          source={require('..//assets/images/perfil.png')}
          style={styles.image}
        />
      </View>

      <Text style={{ color: '#ababab', fontSize: 10, marginTop: 100, position: 'absolute', width: '100%', paddingLeft: 25, }}>All inboxes</Text>

      <View style={styles.emailContainer}>
        <Image
          source={require('..//assets/images/kabum.png')}
          style={styles.imageEmail}
        />

        <Text style={{ color: 'white', fontSize: 18, marginBottom: 30, marginLeft: 15 }}>KaBum!</Text>
        <Text style={{ color: 'white', fontSize: 14, marginLeft: -63 }}>Pedido 123456: Mercadoria em Trânsito!</Text>
        <Text style={{ color: 'white', fontSize: 12, marginLeft: -255, marginTop: 30 }}>FIQUE ATENTO: o KaBum! não faz</Text>

      </View>

      <View style={styles.emailContainer}>
        <Image
          source={require('..//assets/images/kabum.png')}
          style={styles.imageEmail}
        />

        <Text style={{ color: 'white', fontSize: 18, marginBottom: 30, marginLeft: 15 }}>KaBum!</Text>
        <Text style={{ color: 'white', fontSize: 14, marginLeft: -63 }}>Pedido 123456: Coletado pela transportadora!</Text>
        <Text style={{ color: 'white', fontSize: 12, marginLeft: -290, marginTop: 30 }}>FIQUE ATENTO: o KaBum! não faz</Text>

      </View>

      <View style={styles.emailContainer}>
        <Image
          source={require('..//assets/images/kabum.png')}
          style={styles.imageEmail}
        />

        <Text style={{ color: 'white', fontSize: 18, marginBottom: 30, marginLeft: 15 }}>KaBum!</Text>
        <Text style={{ color: 'white', fontSize: 14, marginLeft: -63 }}>Pedido 123456: Enviado! Confira aqui o rastreio!</Text>
        <Text style={{ color: 'white', fontSize: 12, marginLeft: -300, marginTop: 30 }}>FIQUE ATENTO: o KaBum! não faz</Text>

      </View>

      <View style={styles.emailContainer}>
        <Image
          source={require('..//assets/images/kabum.png')}
          style={styles.imageEmail}
        />

        <Text style={{ color: 'white', fontSize: 18, marginBottom: 30, marginLeft: 15 }}>KaBum!</Text>
        <Text style={{ color: 'white', fontSize: 14, marginLeft: -63 }}>Pedido 123456: Aguardando coleta da transpor...</Text>
        <Text style={{ color: 'white', fontSize: 12, marginLeft: -305, marginTop: 30 }}>FIQUE ATENTO: o KaBum! não faz</Text>

      </View>

      <View style={styles.composeContainer}>
        <Image
          source={require('..//assets/images/lapis.png')}
          style={styles.imageCompose}
        />
        <Text style={styles.textComposer}>Compose</Text>
      </View>


      <View style={styles.footer}>

        <Image
          source={require('..//assets/images/carta.png')}
          style={styles.imageCarta}
        />

        <Image
          source={require('..//assets/images/meet.webp')}
          style={styles.imageCarta}
        />
      </View>
    </View>
  );
}