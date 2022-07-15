import React from "react";

import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

import { Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false
}) {

   const estilos = estilosFuncao(grande)

    const getImage = () => {
        if (preenchida) {
            return estrela
        }
        return estrelaCinza
    }

    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}
    >
        <Image source={getImage()} style={estilos.estrela}></Image>
    </TouchableOpacity >
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
    },
})