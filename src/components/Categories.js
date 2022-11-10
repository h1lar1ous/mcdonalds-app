import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { categories } from '../categories';

const Categories = () => {
    const [active, setActive] = React.useState(null)

  return (
    <View style={{paddingTop: 60}}>
        <Text style={{fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white}}>
            Hey,
        </Text>
        <Text style={{fontSize: SIZES.h2, color: COLORS.white}}>
            what's up?
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 30, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {categories.map((cat, idx) => (
                <View
                key={`categories ${idx}`}
                 style={{ 
                     width: '30%',
                     height: 100, 
                     marginBottom: 20, 
                     borderRadius: SIZES.radius, 
                     backgroundColor: active === idx ? COLORS.secondary : COLORS.gray,
                     justifyContent: 'center',
                     alignItems: 'center'
                    }}
                >
                    <TouchableOpacity onPress={() => setActive(idx)}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={{ uri: cat.image }} style={{ width: 40, height: 40 }} />
                            <Text style={{ fontSize: SIZES.h4, color: COLORS.white, marginTop: 5, textAlign: 'center' }}> {cat.name} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    </View>
  );
}

export default Categories;