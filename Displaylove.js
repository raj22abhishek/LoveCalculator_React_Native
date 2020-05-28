import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Displaylove = (props) => {
    if(props.data == "loading"){
        return <Text style={styles.Text}>Please Wait......</Text>
    }
    if(props.data.message){
        return <Text style={styles.Text}>Something Went Wrong Please Calculate Again...</Text>
    }
    else{
    return (
            <View style={styles.container}>
                <Text style={styles.Text}>{props.data.fname}</Text>
                <Text style={styles.Text}>with</Text>
                <Text style={styles.Text}>{props.data.sname}</Text>
                <Text style={styles.Text2}>message-- {props.data.result}</Text>
                <Text style={styles.Text}>percent-- {props.data.percentage} %</Text>
            </View>
        );
    }
};

export default Displaylove;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   justifyContent:"center"
      
    },
    Text:{
        fontSize:25,
        textAlign:"center"
    },
    Text2:{
        fontSize:22,
        textAlign:"center"
    }
  });