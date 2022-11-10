import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const Copyright = () => {
  return (
    <View>
        <Text style={{fontSize: SIZES.h4, color: COLORS.white, textAlign: 'center', marginTop: 80}}>© created by hilarious</Text>
    </View>
  )
}

export default Copyright