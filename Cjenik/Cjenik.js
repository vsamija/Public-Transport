import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    ScrollView
}   from 'react-native'

import { colors } from '../dizajn'

export default class Cjenik extends React.Component {
    static navigationOptions = {
        title: 'Cjenik',
        headerTitleStyle: {
            color: 'grey',
            fontSize: 20,
            fontWeight: '400'
        }
    }
    render () {
        console.log('props:', this.props)
                    return (
                        <ScrollView>
                            <View style={styles.container}>
                                <Text style={styles.heading}>I. zona: jedan smjer - 11kn</Text>
                                <Text style={styles.heading}>I. zona: opća - 230kn</Text>
                                <Text style={styles.heading}>I. zona: umirovljenička - 80kn</Text>
                                <Text style={styles.heading}>I. zona: studentska - 140kn</Text>

                                <Text style={styles.heading}>________________________________________</Text>

                                <Text style={styles.heading}>II. zona: jedan smjer - 15kn</Text>
                                <Text style={styles.heading}>II. zona: opća - 400kn</Text>
                                <Text style={styles.heading}>II. zona: umirovljenička - 160kn</Text>
                                <Text style={styles.heading}>II. zona: studentska - 220kn</Text>

                                <Text style={styles.heading}>________________________________________</Text>

                                <Text style={styles.heading}>III. zona: jedan smjer - 20kn</Text>
                                <Text style={styles.heading}>III. zona: opća - 550kn</Text>
                                <Text style={styles.heading}>III. zona: umirovljenička - 240kn</Text>
                                <Text style={styles.heading}>III. zona: studentska - 550kn</Text>

                            </View>
                        </ScrollView>

                    )
    }
}
const styles = StyleSheet.create({
    container: {
            backgroundColor: colors.secondary,
            flex: 1

    },
    heading: {
            fontSize: 20,
            textAlign: 'left',
            margin: 20,
            color: 'grey'
    }
})


