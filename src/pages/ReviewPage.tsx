import { Button, Text, View } from 'native-base';
import React from 'react'
import { StyleSheet } from 'react-native';

export const ReviewPage = ({ navigation, route }:any) => {
    return (
        <View style={ styles.container }>
          <Text style={ styles.title }>DATOS:</Text>
          
          <Text style={ styles.text }>{route.params.names[0]}</Text>
          <Text style={ styles.text }>{route.params.names[1]}</Text>
          <Text style={ styles.text }>{route.params.names[2]}</Text>
          <Button onPress={() => navigation.goBack()}>Hola</Button>
        </View>
    );
  }

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        paddingTop: 10,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        color: 'black'
    }

});