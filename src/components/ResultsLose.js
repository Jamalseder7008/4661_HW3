import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/HeroContext';


const ResultsLose = (props) => {
    const {state, addHero, editHero} = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const hero = state.find((hero) => {
        return heroID === hero.id;
    })
    return <View>
        <Text>That was a tough defeat through the adventure and you still managed to pick up some Gold!{"\n"}
        {hero.name} that went through the {props.adventurename} survived and managed to
        retrieve 2 gold.{"\n"}Here is the resulting stats.</Text>
        <Text>{"\n"}{hero.name}{"\n"}{"\n"}</Text>
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

export default ResultsLose;