import  React from 'react'

import Pocetna from './Pocetna/Pocetna'
import Cjenik from './Cjenik/Cjenik'
import DodajLiniju from './DodajLiniju/DodajLiniju'
import Linije from './Linije/Linije'
import Linija from './Linije/Linija'

import { colors } from './dizajn'

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

const LinijeNav = createStackNavigator({
    Linije: { screen: Linije},
    Linija: { screen: Linija}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
})
const PocetnaNav = createStackNavigator({
    Pocetna: { screen: Pocetna}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
})
const CjenikNav = createStackNavigator({
    Cjenik: { screen: Cjenik}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
})

const Tabs = createBottomTabNavigator({
    Početna: {screen: PocetnaNav},
    Linije: { screen: LinijeNav },
    Cjenik: { screen: CjenikNav},
    //DodajLiniju: { screen: DodajLiniju}
})

export default Tabs
