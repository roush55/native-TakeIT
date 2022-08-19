import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'

 function Separator({style}) {
    return (
        <View style={[styles.line,style]}>
            
        </View>
    )
}

export default Separator
