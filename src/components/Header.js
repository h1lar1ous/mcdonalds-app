import { View, Image, Linking, TouchableOpacity } from 'react-native'

const Header = () => {
  return (
      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 34}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
            <Image 
            source={{ uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png' }}
            style={{
                width: 51,
                height: 45
            }}
            />
          </TouchableOpacity>
          <View>
            <Image 
                source={{ uri:'https://findicons.com/files/icons/1700/2d/512/cart.png' }}
                style={{
                    width: 45,
                    height: 45
                }}
                />
          </View>
      </View>
  );
}

export default Header;