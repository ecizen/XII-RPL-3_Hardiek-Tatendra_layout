import { View, Text, Image,TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react'


export default function Btn() {
  return (
    <View>
     <View style={{flexDirection: 'row', marginTop: 20, }}>
      <TouchableOpacity style={styles.touchableOpacity}>
      <View style={styles.container1}>
        <Image
          source={require('./google.png')}
          style={styles.image}
        />
        <Text style={styles.text}>google</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpacity1}>
      <View style={styles.container1}>
        <Image
          source={require('./facebook1.png')}
          style={styles.image1}
        />
        <Text style={styles.text}>facebook</Text>
      </View>
    </TouchableOpacity>
    
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'white',
        height: '100%'
        },
        touchableOpacity: {
            width: 150,
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10
          },
        touchableOpacity1: {
            width: 150,
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            marginLeft: 20
          },
          container1: {
            flexDirection: 'row',
            alignItems: 'center',marginTop: 7,
            justifyContent: 'center',
    
            
            
          },
          image: {
            width: 25, // Sesuaikan dengan ukuran gambar yang diinginkan
            height: 25, // Sesuaikan dengan ukuran gambar yang diinginkan
            resizeMode: 'cover',
            bottom: 2
          
          },
          image1: {
            width: 30, // Sesuaikan dengan ukuran gambar yang diinginkan
            height: 30, // Sesuaikan dengan ukuran gambar yang diinginkan
            resizeMode: 'cover',
            bottom: 2
          
          },
          text: {
            marginLeft: 1,
            marginBottom: 8,
            fontSize: 15
    
    
          },
})