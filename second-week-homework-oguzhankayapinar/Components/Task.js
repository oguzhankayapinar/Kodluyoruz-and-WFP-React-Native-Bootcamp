import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:'#D0C9C0',
        padding: 20,
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:{
        width:24,
        height:24,
        opacity:0.4,
        backgroundColor:'#5F7161',
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%',
        color:'#5F7161',
        fontSize:16,
        fontWeight:'bold',
    },
    circular:{
        width:12,
        height:12,
        borderColor: '#5F7161',
        borderWidth:2,
        borderRadius:6,
    },

});

export default Task;