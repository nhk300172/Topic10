import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TabsStackScreenProps} from '../Navigation/TabsNavigation'
type Props = {}

const ProfileScreen = ({navigation, route }: TabsStackScreenProps<'ProfileScreen'>) => {
   return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    },
})

export default ProfileScreen