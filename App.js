
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React, { useState } from "react";
import RosterScreen from "./src/screens/RosterScreen";
import { Provider as HeroProvider} from "./src/context/HeroContext";
import HeroDetailScreen from "./src/screens/HeroDetailScreen";
import Adventure from "./src/screens/Adventure";
import Results from "./src/screens/Results";

const navigator = createStackNavigator(
  {
    Roster: RosterScreen,
    Detail: HeroDetailScreen,
    Adventure: Adventure,
    Results: Results
  },
  {
    initialRouteName: "Roster",
    defaultNavigationOptions: {
      title: "Homework 3",
    },
  }
);
const App = createAppContainer(navigator);

export default () => {
  return <HeroProvider>
    <App />
  </HeroProvider>
}