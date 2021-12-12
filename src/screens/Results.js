import React,{useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ResultsLose from '../components/ResultsLose';
import ResultsWin from '../components/ResultsWin';
import RosterComponent from "../components/RosterComponent";
import { Context } from '../context/HeroContext';

const Results = (props) => {

    
    const {state, addHero, editHero} = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const hero = state.find((hero) => {
        return heroID === hero.id;
    })
    const adventure = props.navigation.getParam("challengeLevel");
    const adventurename = props.navigation.getParam("adventurename");
    
    const checkWinner =() => {
        if (adventure>hero.power) {
            editHero(heroID, hero.name, hero.level,
                hero.power, hero.gold+(2),
                hero.maxHealth, hero.currentHealth-(hero.currentHealth/2));
                return false;
        } else{
            editHero(heroID, hero.name, hero.level+1,
                hero.power, hero.gold+(10),
                hero.maxHealth, hero.currentHealth);
                return true;
        }
            
    }
    


    return<View>
        <Text>Are you ready to see the results of that awesome battle!?!</Text>
        {/* <TouchableOpacity onPress={()=>editHero()}>
            <Text>Finalize Results</Text>
        </TouchableOpacity> */}
        {checkWinner ? 
        <ResultsWin id={hero.id} adventurename={adventurename} adventure={adventure}/> 
        : <ResultsLose id={hero.id} adventurename={adventurename} adventure={adventure}/>}
        
        <RosterComponent navigation={props.navigation}/>
    </View>
}

const styles=StyleSheet.create({});

export default Results;