import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity
}   from 'react-native'

import { colors } from '../dizajn'

export default class Linija extends React.Component {
    static navigationOptions = (props) => {
        return {
            title: props.navigation.state.params.linija.linija,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: '400'
            }
        }
}
    state = {
        naziv: '',
        info: ''
    }
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    dodajStanicu = () => {
        if (this.state.naziv === '' || this.state.info === '' ) return
        const { linija } = this.props.navigation.state.params
        const stanica = {
            naziv: this.state.naziv,
            info: this.state.info
        }
        this.props.screenProps.dodajStanicu(stanica, linija)
        this.setState({
            naziv: '',
            info: ''
        })
    }
    render() {
        const { linija } = this.props.navigation.state.params
        return (

            <View style={{ flex: 1}}>
                {
                    linija.stanice.map((stanica, index) => (
                        <View style={styles.stanicaContainer}>
                            <Text style={styles.naziv}>{stanica.naziv}</Text>
                            <Text style={styles.info}>{stanica.info}</Text>
                        </View>
                    ))
                }
                <TextInput
                    //value={this.state.naziv}
                    //placeholder='Dan kada prometuje'
                    //onChangeText={val => this.onChangeText('naziv', val)}
                    //style={styles.input}
                    //placeholderTextColor='grey'
                />
               <TextInput
                    //value={this.state.info}
                    //placeholder='Informacije'
                    //onChangeText={val => this.onChangeText('info', val)}
                    //style={[styles.input, styles.input2]}
                    //placeholderTextColor='grey'
               />
               <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.dodajStanicu}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}></Text>
                        </View>
                    </TouchableOpacity>
               </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    stanicaContainer: {
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    },
    naziv: {
        fontSize: 20
    },
    info: {
        color: 'rgba(0, 0, 0, .5)'
    },
    input: {
        position: 'absolute',
        height: 50,
        backgroundColor: colors.primary,
        width: '100%',
        bottom: 104,
        left: 0,
        color: 'grey'
    },
    input2: {
        bottom: 52
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'grey',
        fontSize: 20
    }
})






