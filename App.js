import React, { Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  AsyncStorage
} from 'react-native';

import Tabs from './source'
const key = 'linije'

export default class App extends Component {
    state = {
        linije: []
    }
    async componentDidMount() {
        try {
            const linije = await AsyncStorage.getItem(key)
            console.log('linije:', linije)
            this.setState({
                linije: JSON.parse(linije)
            })
        }   catch (e) {
            console.log('e: ', e)
        }
    }
    dodajLiniju = (linija) => {
        const linije = this.state.linije
        linije.push(linija)
        AsyncStorage.setItem(key, JSON.stringify(linije))
            .then(() => console.log('item stored'))
        this.setState({ linije })
    }
    dodajStanicu = (stanica, linija) => {
        const index = this.state.linije.findIndex(item => {
            return item.id === linija.id
        })
        const chosenLinija = this.state.linije[index]
        chosenLinija.stanice.push(stanica)
        const linije = [
            ...this.state.linije.slice(0, index),
            chosenLinija,
            ...this.state.linije.slice(index + 1)
        ]
        this.setState({
            linije
        }, () => {
            AsyncStorage.setItem(key, JSON.stringify(linije))
                .then(() => console.log('item stored'))
                .catch(err => {
                    console.log('error: ', err)
                })
        })
    }
    render() {
        return (
            <Tabs
                screenProps={{
                    linije: this.state.linije,
                    dodajLiniju: this.dodajLiniju,
                    dodajStanicu: this.dodajStanicu
                }}
             />
        )
    }
}

