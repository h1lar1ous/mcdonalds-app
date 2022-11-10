import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { popular } from '../popular';

const Popular = () => {
    const [active, setActive] = React.useState(null)

  return (
    <View style={{paddingTop: 30}}>
        <Text style={{fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white}}>
            Popular
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 30, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {popular.map((product, idx) => (
                <View
                key={`popular ${idx}`}
                 style={{ 
                     width: '30%',
                     height: 120, 
                     marginBottom: 20, 
                     borderRadius: SIZES.radius, 
                     backgroundColor: active === idx ? COLORS.white : COLORS.gray,
                     justifyContent: 'center',
                     alignItems: 'center'
                    }}
                >
                    <TouchableOpacity onPress={() => setActive(idx)}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={{ uri: product.image }} style={{ width: 40, height: 40 }} />
                            <Text style={{ fontSize: SIZES.h4, color: active === idx ? COLORS.black : COLORS.white, marginTop: 5, textAlign: 'center' }}> {product.name} </Text>
                            <Text style={{ fontSize: SIZES.h4, color: COLORS.primary, marginTop: 5, textAlign: 'center' }}> {product.price} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    </View>
  );
}

export default Popular;