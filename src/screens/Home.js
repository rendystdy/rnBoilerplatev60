import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
// import moduleName from '../redux/actions/actionTypes'

const Home = props => {
   console.log('home', props);
   
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

const mapStateToProps = state => {
   return {
      count : state.count
   }
}

export default connect(mapStateToProps)(Home);
