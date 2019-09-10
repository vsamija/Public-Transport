import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
}   from 'react-native'

import { colors } from '../dizajn'
import _ from 'lodash'

export default class Linije extends React.Component {
    static navigationOptions = {
        title: 'Linije',
        headerTitleStyle: {
            color: 'grey',
            fontSize: 20,
            fontWeight: '400'
        }
    }
    viewLinija = (linija) => {
        this.props.navigation.navigate('Linija', { linija })
    }
    render() {
    const linijee = _.get(this.props.screenProps, 'linije', [])
        if(_.size(linijee) > 0){
            return (
                        <ScrollView>
                            <View>
                                {
                                    this.props.screenProps.linije.map((linija, index) => (
                                        <View>
                                            <TouchableWithoutFeedback
                                                onPress={() => this.viewLinija(linija)}
                                            >
                                                <View style={styles.linijaContainer}>
                                                    <Text style={styles.linija}>{linija.linija}</Text>
                                                    <Text style={styles.kvart}>{linija.kvart}</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    )
        }
        else {
            return <View>
                        <Text></Text>
                   </View>

        }
        console.log('props: ', this.props)

    }
}

const styles = StyleSheet.create({
    linijaContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    linija: {
        fontSize: 20
    },
    kvart: {
        color: 'rgba(0, 0, 0, .5)'
    },
})




