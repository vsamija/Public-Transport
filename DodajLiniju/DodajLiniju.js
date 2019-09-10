import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
}   from 'react-native'

import uuidV4 from 'uuid/v4'
import { colors } from '../dizajn'

export default class DodajLiniju extends React.Component {
    state = {
        linija: '',
        kvart: ''
    }
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    submit = () => {
        if (this.state.linija === '' || this.state.kvart === '') return
        const linija = {
            linija: this.state.linija,
            kvart: this.state.kvart,
            stanice: [],
            id: uuidV4()
        }
        this.props.screenProps.dodajLiniju(linija)
        this.setState({
            linija: '',
            kvart: '',
        }, () => {
            this.props.navigation.navigate('Linije')
        })
    }
    render(){
        console.log('props:', this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Dodavanje linije</Text>
                <TextInput
                    placeholder='Naziv linije'
                    value={this.state.linija}
                    onChangeText={val => this.onChangeText('linija', val)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Naziv kvarta'
                    value={this.state.kvart}
                    onChangeText={val => this.onChangeText('kvart', val)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Dodaj liniju</Text>
                    </View>
                </TouchableOpacity>
             </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        margin: 10,
        paddingHorizontal: 8,
        height: 50
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'grey'
    }
})