import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Componente(props){
    let texto = [];
    let pessoa = [];
    let refri = 600;    
    let agua = 200;
    let bolo = 100;
    let doce = 3;
    let salgadinho = 10;

    texto.push(
            <Text style = {styles.texto}>
                Quantidade Pessoas:                    {(pessoa = parseFloat(props.num))} pessoas {'\n'}
                Quantidade de refrigerante:         {(refri * parseFloat(props.num))/1000} litros {'\n'}
                Quantidade de água:                    {(agua * parseFloat(props.num))/1000} litros {'\n'}
                Quantidade de bolo:                     {(bolo * parseFloat(props.num))/1000} kg {'\n'}
                Quantidade de doces:                   {doce * parseFloat(props.num)} unidades {'\n'}
                Quantidade de salgadinhos:         {salgadinho * parseFloat(props.num)} unidades {'\n'}
            </Text>
        );
    
    return(
        <>
            <View style = {styles.container}>
                {texto}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Futura',
        width: '40%',
        padding: 18,
        borderRadius: 7,  
        backgroundColor: '#008080',
    },
    texto: {
        textAlign: "left",
        fontSize: 26,
    }
});