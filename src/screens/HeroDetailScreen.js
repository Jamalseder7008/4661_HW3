import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import RosterComponent from '../components/RosterComponent';
import { Context } from '../context/HeroContext';

const HeroDetailScreen = (props) =>{
    
    const {state, addHero, editHero} = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const hero = state.find((hero) => {
        return heroID === hero.id;
    })

    return <View style={styles.FullStyle}>
        
         <Text style={styles.name}>{"\n"}{hero.name}{"\n"}{"\n"}</Text>
         <Text>Level:{hero.level}</Text>
         <Text>Gold: {hero.gold} </Text>
         <Text>Power: {hero.power}</Text>
         <Text>Max Health: {hero.maxHealth} </Text>
         <Text>Current Health: {hero.currentHealth}{"\n"}{"\n"}</Text>
         <TouchableOpacity style={styles.container} onPress={() => {editHero(heroID, hero.name, hero.level+1,
            hero.power+5, hero.gold-(hero.level*10),
            hero.maxHealth+5, hero.currentHealth)}}>
             
            <Text style={styles.button}>LEVEL UP! ({10*hero.level} GOLD)</Text>    
        </TouchableOpacity>
        <Text>{"\n"}{"\n"}</Text>
         <RosterComponent navigation={props.navigation}/>
    </View>
}
//TODO: make new adventure screen
//TODO: level up characters-characterscreen add a button to spend gold to make players level up
//TODO: make hero generation funciton to make more names
//TODO: reusuable component for bottom bar

const styles = StyleSheet.create({
    FullStyle:{
        justifyContent: "space-around"
    },
    name:{
        fontSize: 20,
        alignSelf: 'center'
    },
    container:{
        alignContent: 'center',
        borderWidth: 2,

    },
    button: {
        fontSize: 15,
        alignSelf: 'center'
    }
});

export default HeroDetailScreen;