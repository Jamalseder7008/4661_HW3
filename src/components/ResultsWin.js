import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Adventure from '../screens/Adventure';
import { Context } from '../context/HeroContext';


const ResultsWin = (props) => {
    const {state, addHero, editHero} = useContext(Context);
    
    const hero = state.find((hero) => {
        return props.id === hero.id;
    })
    
    return <View>
        <Text>That was a great win through the adventure and you managed to pick up some Gold!{"\n"}
        {hero.name} went through the {props.adventurename} survived and managed to
        retrieve 10 gold.{"\n"} Here are the resulting stats.</Text>
        <Text>{"\n"}name{"\n"}{"\n"}</Text>
         <Text>Level:{hero.level}</Text>
         <Text>Gold: {hero.gold} </Text>
         <Text>Power: {hero.power}</Text>
         <Text>Max Health: {hero.maxHealth} </Text>
         <Text>Current Health: {hero.currentHealth}{"\n"}{"\n"}</Text>

    </View>
}

const styles=StyleSheet.create({
    button: { 
        
        
        
        width: "50%", 
        height: 30, 
        borderColor: "black", 
        borderRadius: 10, 
        backgroundColor: "darkgrey", 
        justifyContent: "center"
    },
    container:{
        // position: 'absolute',
        margin: 5,
        // bottom: 0,
        // left: 0,
        flexDirection:'row',
        alignContent: 'center',
        

    },
    texts: {
        fontSize: 15,
        alignSelf: 'center'
    }
});

export default ResultsWin;