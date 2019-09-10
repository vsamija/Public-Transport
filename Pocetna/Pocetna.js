import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
}   from 'react-native'

import { colors } from '../dizajn'

export default class Pocetna extends React.Component {
    static navigationOptions = {
        title: 'Gradski prijevoz Pula',
        headerTitleStyle: {
            color: 'grey',
            fontSize: 20,
            fontWeight: '400'
        }
    }
    render(){
            console.log('props:', this.props)
            return (
                <View style={styles.PocetnaContainer}>
                 <View style= {{
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                     }}>
                                         <Image
                                         source={require('./bus.jpg')}
                                         style={{width: 412, height: 350, marginTop: 5 }}>
                                         </Image>
                                     </View>
                </View>




            );
    }
}

const styles = StyleSheet.create({
    PocetnaContainer: {
        backgroundColor: colors.secondary,
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
