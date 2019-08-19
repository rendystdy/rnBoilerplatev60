import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>Screen Home</Text>
      <Icon name="md-home" size={30} />
      <Button
        title="Back To Home"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
